import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { type PlayerStackData } from "./data.ts";

type ChartProps = {
  stackData: PlayerStackData[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};
export default function Chart({
  stackData,
  width = 928,
  height = 600,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 30,
}: ChartProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // TODO: This is an abomination. Clean up and use actual SVG components.

    const x = d3
      .scaleTime()
      .domain(
        d3
          .extent(stackData, (d) => new Date(d.at))
          .map((date) => date || new Date()),
      )
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(stackData, (d) => d.amount) || 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    const svg = d3.select(ref.current);
    // Add the horizontal axis.
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0),
      );

    // Add the vertical axis.
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Chip Stack"),
      );

    // Compute the points in pixel space as [x, y, z], where z is the name of the series.
    const points: [number, number, string][] = stackData.map((d) => [
      x(new Date(d.at)),
      y(d.amount),
      d.name,
    ]);

    // Group the points by series.
    const groups = d3.rollup(
      points,
      (v) => v,
      (d) => d[2],
    );

    // Draw the lines.
    const line = d3.line();

    const path = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .selectAll("path")
      .data(groups.values())
      .join("path")
      .style("mix-blend-mode", "multiply")
      // @ts-expect-error("ignore this type error because d3 is weird")
      .attr("d", line);

    // Add an invisible layer for the interactive tip.
    const dot = svg.append("g").attr("display", "none");

    dot.append("circle").attr("r", 2.5);

    dot.append("text").attr("text-anchor", "middle").attr("y", -8);
    // When the pointer moves, find the closest point, update the interactive tip, and highlight
    // the corresponding line. Note: we don't actually use Voronoi here, since an exhaustive search
    // is fast enough.
    function pointermoved(event: PointerEvent) {
      const [xm, ym] = d3.pointer(event);
      const i =
        d3.leastIndex(points, ([x, y]) => Math.hypot(x - xm, y - ym)) || 0;
      const [x, y, k] = points[i];
      path
        .style("stroke", (d) => (d[0][2] === k ? null : "#ddd"))
        .filter((d) => d[0][2] === k)
        .raise();
      dot.attr("transform", `translate(${x},${y})`);
      dot.select("text").text(`${k} (${stackData[i].amount})`);
      svg
        .property("value", stackData[i])
        .dispatch("input", { bubbles: true, cancelable: true, detail: {} });
    }

    function pointerentered() {
      path.style("mix-blend-mode", null).style("stroke", "#ddd");
      dot.attr("display", null);
    }

    function pointerleft() {
      path.style("mix-blend-mode", "multiply").style("stroke", null);
      dot.attr("display", "none");
      svg.dispatch("input", { bubbles: true, cancelable: true, detail: {} });
    }

    svg
      .on("pointerenter", pointerentered)
      .on("pointermove", pointermoved)
      .on("pointerleave", pointerleft)
      .on("touchstart", (event) => event.preventDefault());

    return () => {
      // Clean up D3 Dom updates when unloading component so it's not a disaster of charts.
      // Good God this is hideous.
      while (ref.current?.firstChild) {
        if (ref.current?.lastChild) {
          ref.current?.removeChild(ref.current.lastChild);
        }
      }
    };
  }, [
    height,
    width,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    stackData,
  ]);

  return <svg width={width} height={height} ref={ref} />;
}
