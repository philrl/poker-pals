// THIS FILE WAS AUTO GENERATED. EDIT AT YOUR OWN RISK
export type PlayerStackData = {
  stacks: { [name: string]: number };
  at: Date | string;
};

export type Pot = {
  name: string;
  pot: number;
};

export type Exit = {
  name: string;
  at: Date | string;
};

export type GameData = {
  stacks: PlayerStackData[];
  hands: number;
  flops: number;
  turns: number;
  rivers: number;
  allIns: number;
  largestPots: Pot[];
  exits: Exit[];
  players: string[];
  potsWon: Record<string, number>;
};
export type Games = Record<string, GameData>;

export const data: Games = {
  june: {
    stacks: [
      {
        at: "2024-06-23T02:00:14.898Z",
        stacks: {
          Ev: 200,
          Jeremy: 200,
          Robbie: 200,
          Andrew: 200,
          Phil: 200,
          Iain: 200,
          deth: 200,
        },
      },
      {
        at: "2024-06-23T02:02:34.168Z",
        stacks: {
          Ev: 198,
          Jeremy: 200,
          Robbie: 169,
          Andrew: 198,
          Phil: 196,
          Iain: 241,
          deth: 198,
        },
      },
      {
        at: "2024-06-23T02:04:23.518Z",
        stacks: {
          Ev: 196,
          Jeremy: 198,
          Robbie: 163,
          Andrew: 196,
          Phil: 215,
          Iain: 235,
          deth: 197,
        },
      },
      {
        at: "2024-06-23T02:06:33.441Z",
        stacks: {
          Ev: 192,
          Jeremy: 176,
          Robbie: 193,
          Andrew: 194,
          Phil: 213,
          Iain: 235,
          deth: 197,
        },
      },
      {
        at: "2024-06-23T02:08:46.772Z",
        stacks: {
          Ev: 192,
          Jeremy: 120,
          Robbie: 191,
          Andrew: 192,
          Phil: 211,
          Iain: 233,
          deth: 261,
        },
      },
      {
        at: "2024-06-23T02:09:59.604Z",
        stacks: {
          Ev: 190,
          Jeremy: 120,
          Robbie: 189,
          Andrew: 200,
          Phil: 209,
          Iain: 233,
          deth: 259,
        },
      },
      {
        at: "2024-06-23T02:11:35.728Z",
        stacks: {
          Ev: 220,
          Jeremy: 120,
          Robbie: 163,
          Andrew: 198,
          Phil: 207,
          Iain: 233,
          deth: 259,
        },
      },
      {
        at: "2024-06-23T02:13:33.457Z",
        stacks: {
          Ev: 218,
          Jeremy: 120,
          Robbie: 163,
          Andrew: 198,
          Phil: 205,
          Iain: 251,
          deth: 245,
        },
      },
      {
        at: "2024-06-23T02:16:10.472Z",
        stacks: {
          Ev: 218,
          Jeremy: 120,
          Robbie: 163,
          Andrew: 196,
          Phil: 183,
          Iain: 249,
          deth: 271,
        },
      },
      {
        at: "2024-06-23T02:18:57.120Z",
        stacks: {
          Ev: 212,
          Jeremy: 120,
          Robbie: 137,
          Andrew: 190,
          Phil: 243,
          Iain: 243,
          deth: 255,
        },
      },
      {
        at: "2024-06-23T02:20:59.089Z",
        stacks: {
          Ev: 210,
          Jeremy: 136,
          Robbie: 133,
          Andrew: 186,
          Phil: 239,
          Iain: 243,
          deth: 253,
        },
      },
      {
        at: "2024-06-23T02:22:47.334Z",
        stacks: {
          Ev: 181,
          Jeremy: 173,
          Robbie: 131,
          Andrew: 184,
          Phil: 237,
          Iain: 243,
          deth: 251,
        },
      },
      {
        at: "2024-06-23T02:24:53.495Z",
        stacks: {
          Ev: 177,
          Jeremy: 173,
          Robbie: 141,
          Andrew: 182,
          Phil: 237,
          Iain: 243,
          deth: 247,
        },
      },
      {
        at: "2024-06-23T02:27:02.845Z",
        stacks: {
          Ev: 177,
          Jeremy: 173,
          Robbie: 135,
          Andrew: 176,
          Phil: 231,
          Iain: 267,
          deth: 241,
        },
      },
      {
        at: "2024-06-23T02:29:16.367Z",
        stacks: {
          Ev: 177,
          Jeremy: 173,
          Robbie: 135,
          Andrew: 176,
          Phil: 239,
          Iain: 263,
          deth: 237,
        },
      },
      {
        at: "2024-06-23T02:32:03.669Z",
        stacks: {
          Ev: 177,
          Jeremy: 97,
          Robbie: 129,
          Andrew: 176,
          Phil: 328,
          Iain: 262,
          deth: 231,
        },
      },
      {
        at: "2024-06-23T02:34:11.226Z",
        stacks: {
          Ev: 161,
          Jeremy: 97,
          Robbie: 129,
          Andrew: 176,
          Phil: 348,
          Iain: 262,
          deth: 227,
        },
      },
      {
        at: "2024-06-23T02:36:29.550Z",
        stacks: {
          Ev: 153,
          Jeremy: 76,
          Robbie: 129,
          Andrew: 222,
          Phil: 348,
          Iain: 245,
          deth: 227,
        },
      },
      {
        at: "2024-06-23T02:37:49.835Z",
        stacks: {
          Ev: 153,
          Jeremy: 72,
          Robbie: 125,
          Andrew: 242,
          Phil: 344,
          Iain: 241,
          deth: 223,
        },
      },
      {
        at: "2024-06-23T02:39:45.302Z",
        stacks: {
          Ev: 149,
          Jeremy: 72,
          Robbie: 247,
          Andrew: 183,
          Phil: 344,
          Iain: 241,
          deth: 164,
        },
      },
      {
        at: "2024-06-23T02:42:05.612Z",
        stacks: {
          Ev: 149,
          Jeremy: 108,
          Robbie: 231,
          Andrew: 167,
          Phil: 340,
          Iain: 241,
          deth: 164,
        },
      },
      {
        at: "2024-06-23T02:44:20.272Z",
        stacks: {
          Ev: 149,
          Jeremy: 92,
          Robbie: 273,
          Andrew: 167,
          Phil: 338,
          Iain: 237,
          deth: 144,
        },
      },
      {
        at: "2024-06-23T02:46:35.753Z",
        stacks: {
          Ev: 149,
          Jeremy: 92,
          Robbie: 243,
          Andrew: 167,
          Phil: 378,
          Iain: 235,
          deth: 136,
        },
      },
      {
        at: "2024-06-23T02:49:45.121Z",
        stacks: {
          Ev: 145,
          Jeremy: 92,
          Robbie: 283,
          Andrew: 163,
          Phil: 374,
          Iain: 211,
          deth: 132,
        },
      },
      {
        at: "2024-06-23T02:50:42.095Z",
        stacks: {
          Ev: 141,
          Jeremy: 88,
          Robbie: 303,
          Andrew: 159,
          Phil: 370,
          Iain: 207,
          deth: 132,
        },
      },
      {
        at: "2024-06-23T02:52:12.718Z",
        stacks: {
          Ev: 121,
          Jeremy: 84,
          Robbie: 395,
          Andrew: 119,
          Phil: 366,
          Iain: 187,
          deth: 128,
        },
      },
      {
        at: "2024-06-23T02:54:30.891Z",
        stacks: {
          Ev: 89,
          Jeremy: 52,
          Robbie: 535,
          Andrew: 55,
          Phil: 358,
          Iain: 187,
          deth: 124,
        },
      },
      {
        at: "2024-06-23T02:56:26.358Z",
        stacks: {
          Ev: 89,
          Jeremy: 116,
          Robbie: 483,
          Andrew: 51,
          Phil: 354,
          Iain: 187,
          deth: 120,
        },
      },
      {
        at: "2024-06-23T02:57:50.607Z",
        stacks: {
          Ev: 85,
          Jeremy: 116,
          Robbie: 467,
          Andrew: 79,
          Phil: 350,
          Iain: 183,
          deth: 120,
        },
      },
      {
        at: "2024-06-23T02:59:18.599Z",
        stacks: {
          Ev: 85,
          Jeremy: 116,
          Robbie: 467,
          Andrew: 79,
          Phil: 342,
          Iain: 167,
          deth: 144,
        },
      },
      {
        at: "2024-06-23T03:01:08.596Z",
        stacks: {
          Ev: 95,
          Jeremy: 112,
          Robbie: 477,
          Andrew: 75,
          Phil: 338,
          Iain: 167,
          deth: 136,
        },
      },
      {
        at: "2024-06-23T03:03:45.338Z",
        stacks: {
          Ev: 92,
          Jeremy: 211,
          Robbie: 453,
          Andrew: 75,
          Phil: 302,
          Iain: 167,
          deth: 100,
        },
      },
      {
        at: "2024-06-23T03:05:32.855Z",
        stacks: {
          Ev: 92,
          Jeremy: 205,
          Robbie: 441,
          Andrew: 69,
          Phil: 326,
          Iain: 167,
          deth: 100,
        },
      },
      {
        at: "2024-06-23T03:06:42.888Z",
        stacks: {
          Ev: 92,
          Jeremy: 205,
          Robbie: 435,
          Andrew: 63,
          Phil: 320,
          Iain: 191,
          deth: 94,
        },
      },
      {
        at: "2024-06-23T03:07:39.998Z",
        stacks: {
          Ev: 92,
          Jeremy: 205,
          Robbie: 462,
          Andrew: 60,
          Phil: 302,
          Iain: 185,
          deth: 94,
        },
      },
      {
        at: "2024-06-23T03:08:54.047Z",
        stacks: {
          Ev: 92,
          Jeremy: 205,
          Robbie: 480,
          Andrew: 54,
          Phil: 296,
          Iain: 179,
          deth: 94,
        },
      },
      {
        at: "2024-06-23T03:10:20.876Z",
        stacks: {
          Ev: 122,
          Jeremy: 199,
          Robbie: 474,
          Andrew: 54,
          Phil: 290,
          Iain: 173,
          deth: 88,
        },
      },
      {
        at: "2024-06-23T03:12:33.122Z",
        stacks: {
          Ev: 200,
          Jeremy: 199,
          Robbie: 414,
          Andrew: 54,
          Phil: 290,
          Iain: 167,
          deth: 76,
        },
      },
      {
        at: "2024-06-23T03:14:09.866Z",
        stacks: {
          Ev: 230,
          Jeremy: 193,
          Robbie: 408,
          Andrew: 54,
          Phil: 272,
          Iain: 167,
          deth: 76,
        },
      },
      {
        at: "2024-06-23T03:15:33.154Z",
        stacks: {
          Ev: 212,
          Jeremy: 187,
          Robbie: 396,
          Andrew: 102,
          Phil: 266,
          Iain: 167,
          deth: 70,
        },
      },
      {
        at: "2024-06-23T03:18:06.670Z",
        stacks: {
          Ev: 206,
          Jeremy: 202,
          Robbie: 390,
          Andrew: 96,
          Phil: 281,
          Iain: 161,
          deth: 64,
        },
      },
      {
        at: "2024-06-23T03:20:27.995Z",
        stacks: {
          Ev: 200,
          Jeremy: 202,
          Robbie: 435,
          Andrew: 93,
          Phil: 257,
          Iain: 155,
          deth: 58,
        },
      },
      {
        at: "2024-06-23T03:21:56.680Z",
        stacks: {
          Ev: 218,
          Jeremy: 202,
          Robbie: 429,
          Andrew: 93,
          Phil: 251,
          Iain: 149,
          deth: 58,
        },
      },
      {
        at: "2024-06-23T03:24:17.233Z",
        stacks: {
          Ev: 206,
          Jeremy: 196,
          Robbie: 336,
          Andrew: 228,
          Phil: 245,
          Iain: 137,
          deth: 52,
        },
      },
      {
        at: "2024-06-23T03:26:29.577Z",
        stacks: {
          Ev: 200,
          Jeremy: 184,
          Robbie: 330,
          Andrew: 258,
          Phil: 245,
          Iain: 137,
          deth: 46,
        },
      },
      {
        at: "2024-06-23T03:28:54.987Z",
        stacks: {
          Ev: 194,
          Jeremy: 166,
          Robbie: 318,
          Andrew: 318,
          Phil: 221,
          Iain: 137,
          deth: 46,
        },
      },
      {
        at: "2024-06-23T03:30:23.489Z",
        stacks: {
          Ev: 188,
          Jeremy: 163,
          Robbie: 282,
          Andrew: 369,
          Phil: 221,
          Iain: 131,
          deth: 46,
        },
      },
      {
        at: "2024-06-23T03:32:05.975Z",
        stacks: {
          Ev: 188,
          Jeremy: 163,
          Robbie: 276,
          Andrew: 323,
          Phil: 221,
          Iain: 229,
        },
      },
      {
        at: "2024-06-23T03:33:10.971Z",
        stacks: {
          Ev: 188,
          Jeremy: 163,
          Robbie: 288,
          Andrew: 319,
          Phil: 213,
          Iain: 229,
        },
      },
      {
        at: "2024-06-23T03:34:45.509Z",
        stacks: {
          Ev: 164,
          Jeremy: 163,
          Robbie: 336,
          Andrew: 311,
          Phil: 205,
          Iain: 221,
        },
      },
      {
        at: "2024-06-23T03:36:07.643Z",
        stacks: {
          Ev: 156,
          Jeremy: 155,
          Robbie: 320,
          Andrew: 311,
          Phil: 189,
          Iain: 269,
        },
      },
      {
        at: "2024-06-23T03:37:31.580Z",
        stacks: {
          Ev: 148,
          Jeremy: 171,
          Robbie: 320,
          Andrew: 311,
          Phil: 181,
          Iain: 269,
        },
      },
      {
        at: "2024-06-23T03:38:28.734Z",
        stacks: {
          Ev: 148,
          Jeremy: 187,
          Robbie: 304,
          Andrew: 311,
          Phil: 181,
          Iain: 269,
        },
      },
      {
        at: "2024-06-23T03:40:12.121Z",
        stacks: {
          Ev: 140,
          Jeremy: 179,
          Robbie: 400,
          Andrew: 255,
          Phil: 181,
          Iain: 245,
        },
      },
      {
        at: "2024-06-23T03:42:30.511Z",
        stacks: {
          Ev: 188,
          Jeremy: 163,
          Robbie: 392,
          Andrew: 239,
          Phil: 173,
          Iain: 245,
        },
      },
      {
        at: "2024-06-23T03:44:53.741Z",
        stacks: {
          Ev: 188,
          Jeremy: 163,
          Robbie: 396,
          Andrew: 239,
          Phil: 165,
          Iain: 249,
        },
      },
      {
        at: "2024-06-23T03:46:17.929Z",
        stacks: {
          Ev: 172,
          Jeremy: 163,
          Robbie: 396,
          Andrew: 239,
          Phil: 189,
          Iain: 241,
        },
      },
      {
        at: "2024-06-23T03:47:00.218Z",
        stacks: {
          Ev: 164,
          Jeremy: 155,
          Robbie: 412,
          Andrew: 239,
          Phil: 189,
          Iain: 241,
        },
      },
      {
        at: "2024-06-23T03:49:19.525Z",
        stacks: {
          Ev: 164,
          Robbie: 396,
          Andrew: 231,
          Phil: 221,
          Iain: 241,
        },
      },
      {
        at: "2024-06-23T03:50:58.751Z",
        stacks: {
          Ev: 148,
          Robbie: 380,
          Andrew: 263,
          Phil: 221,
          Iain: 241,
        },
      },
      {
        at: "2024-06-23T03:52:27.852Z",
        stacks: {
          Ev: 148,
          Robbie: 380,
          Andrew: 255,
          Phil: 245,
          Iain: 225,
        },
      },
      {
        at: "2024-06-23T03:54:03.696Z",
        stacks: {
          Ev: 148,
          Jeremy: 147,
          Robbie: 388,
          Andrew: 247,
          Phil: 237,
          Iain: 233,
        },
      },
      {
        at: "2024-06-23T03:56:01.541Z",
        stacks: {
          Ev: 123,
          Jeremy: 139,
          Robbie: 471,
          Andrew: 247,
          Phil: 195,
          Iain: 225,
        },
      },
      {
        at: "2024-06-23T03:56:58.915Z",
        stacks: {
          Ev: 163,
          Jeremy: 131,
          Robbie: 439,
          Andrew: 247,
          Phil: 195,
          Iain: 225,
        },
      },
      {
        at: "2024-06-23T03:59:06.326Z",
        stacks: {
          Ev: 163,
          Jeremy: 127,
          Robbie: 431,
          Andrew: 171,
          Phil: 179,
          Iain: 329,
        },
      },
      {
        at: "2024-06-23T04:00:39.742Z",
        stacks: {
          Ev: 163,
          Jeremy: 127,
          Robbie: 382,
          Andrew: 163,
          Phil: 171,
          Iain: 394,
        },
      },
      {
        at: "2024-06-23T04:01:20.308Z",
        stacks: {
          Ev: 163,
          Jeremy: 127,
          Robbie: 382,
          Andrew: 159,
          Phil: 163,
          Iain: 406,
        },
      },
      {
        at: "2024-06-23T04:03:53.562Z",
        stacks: {
          Ev: 155,
          Jeremy: 127,
          Robbie: 406,
          Andrew: 159,
          Phil: 155,
          Iain: 398,
        },
      },
      {
        at: "2024-06-23T04:05:07.476Z",
        stacks: {
          Ev: 145,
          Jeremy: 157,
          Robbie: 406,
          Andrew: 149,
          Phil: 155,
          Iain: 388,
        },
      },
      {
        at: "2024-06-23T04:07:53.935Z",
        stacks: {
          Ev: 115,
          Jeremy: 556,
          Robbie: 306,
          Phil: 95,
          Iain: 328,
        },
      },
      {
        at: "2024-06-23T04:09:51.582Z",
        stacks: {
          Ev: 215,
          Jeremy: 546,
          Robbie: 216,
          Phil: 95,
          Iain: 328,
        },
      },
      {
        at: "2024-06-23T04:10:32.373Z",
        stacks: {
          Ev: 205,
          Jeremy: 571,
          Robbie: 211,
          Phil: 85,
          Iain: 328,
        },
      },
      {
        at: "2024-06-23T04:11:19.585Z",
        stacks: {
          Ev: 205,
          Jeremy: 571,
          Robbie: 201,
          Phil: 75,
          Iain: 348,
        },
      },
      {
        at: "2024-06-23T04:11:50.757Z",
        stacks: {
          Ev: 195,
          Jeremy: 571,
          Robbie: 201,
          Phil: 75,
          Iain: 358,
        },
      },
      {
        at: "2024-06-23T04:12:55.445Z",
        stacks: {
          Ev: 185,
          Jeremy: 561,
          Robbie: 306,
          Iain: 348,
        },
      },
      {
        at: "2024-06-23T04:14:09.907Z",
        stacks: {
          Ev: 185,
          Jeremy: 481,
          Robbie: 296,
          Iain: 438,
        },
      },
      {
        at: "2024-06-23T04:14:19.907Z",
        stacks: {
          Ev: 185,
          Jeremy: 481,
          Robbie: 291,
          Iain: 443,
        },
      },
      {
        at: "2024-06-23T04:15:13.784Z",
        stacks: {
          Ev: 175,
          Jeremy: 471,
          Robbie: 291,
          Iain: 463,
        },
      },
      {
        at: "2024-06-23T04:16:18.662Z",
        stacks: {
          Ev: 225,
          Jeremy: 461,
          Robbie: 251,
          Iain: 463,
        },
      },
      {
        at: "2024-06-23T04:17:07.352Z",
        stacks: {
          Ev: 225,
          Jeremy: 481,
          Robbie: 241,
          Iain: 453,
        },
      },
      {
        at: "2024-06-23T04:17:43.554Z",
        stacks: {
          Ev: 255,
          Jeremy: 471,
          Robbie: 231,
          Iain: 443,
        },
      },
      {
        at: "2024-06-23T04:18:18.087Z",
        stacks: {
          Ev: 245,
          Jeremy: 491,
          Robbie: 231,
          Iain: 433,
        },
      },
      {
        at: "2024-06-23T04:20:13.300Z",
        stacks: {
          Ev: 225,
          Jeremy: 421,
          Robbie: 171,
          Iain: 583,
        },
      },
      {
        at: "2024-06-23T04:21:37.054Z",
        stacks: {
          Ev: 104,
          Jeremy: 411,
          Robbie: 161,
          Iain: 724,
        },
      },
      {
        at: "2024-06-23T04:22:07.958Z",
        stacks: {
          Ev: 104,
          Jeremy: 401,
          Robbie: 156,
          Iain: 739,
        },
      },
      {
        at: "2024-06-23T04:23:05.869Z",
        stacks: {
          Ev: 144,
          Jeremy: 401,
          Robbie: 136,
          Iain: 719,
        },
      },
      {
        at: "2024-06-23T04:23:48.843Z",
        stacks: {
          Ev: 134,
          Jeremy: 421,
          Robbie: 126,
          Iain: 719,
        },
      },
      {
        at: "2024-06-23T04:24:17.147Z",
        stacks: {
          Ev: 134,
          Jeremy: 431,
          Robbie: 116,
          Iain: 719,
        },
      },
      {
        at: "2024-06-23T04:25:18.156Z",
        stacks: {
          Ev: 134,
          Jeremy: 431,
          Robbie: 126,
          Iain: 709,
        },
      },
      {
        at: "2024-06-23T04:25:52.850Z",
        stacks: {
          Ev: 124,
          Jeremy: 451,
          Robbie: 126,
          Iain: 699,
        },
      },
      {
        at: "2024-06-23T04:26:32.073Z",
        stacks: {
          Ev: 144,
          Jeremy: 441,
          Robbie: 116,
          Iain: 699,
        },
      },
      {
        at: "2024-06-23T04:27:21.317Z",
        stacks: {
          Ev: 184,
          Jeremy: 431,
          Robbie: 106,
          Iain: 679,
        },
      },
      {
        at: "2024-06-23T04:28:26.437Z",
        stacks: {
          Ev: 184,
          Jeremy: 431,
          Robbie: 116,
          Iain: 669,
        },
      },
      {
        at: "2024-06-23T04:29:28.704Z",
        stacks: {
          Ev: 194,
          Jeremy: 431,
          Robbie: 116,
          Iain: 659,
        },
      },
      {
        at: "2024-06-23T04:30:56.575Z",
        stacks: {
          Ev: 189,
          Jeremy: 401,
          Robbie: 116,
          Iain: 694,
        },
      },
      {
        at: "2024-06-23T04:32:13.584Z",
        stacks: {
          Ev: 149,
          Jeremy: 471,
          Robbie: 96,
          Iain: 684,
        },
      },
      {
        at: "2024-06-23T04:32:43.454Z",
        stacks: {
          Ev: 149,
          Jeremy: 471,
          Robbie: 116,
          Iain: 664,
        },
      },
      {
        at: "2024-06-23T04:33:52.603Z",
        stacks: {
          Ev: 33,
          Jeremy: 471,
          Robbie: 252,
          Iain: 644,
        },
      },
      {
        at: "2024-06-23T04:34:27.346Z",
        stacks: {
          Ev: 23,
          Jeremy: 451,
          Robbie: 252,
          Iain: 674,
        },
      },
      {
        at: "2024-06-23T04:34:50.167Z",
        stacks: {
          Ev: 23,
          Jeremy: 471,
          Robbie: 232,
          Iain: 674,
        },
      },
      {
        at: "2024-06-23T04:35:51.676Z",
        stacks: {
          Ev: 23,
          Jeremy: 501,
          Robbie: 222,
          Iain: 654,
        },
      },
      {
        at: "2024-06-23T04:37:05.459Z",
        stacks: {
          Jeremy: 438,
          Robbie: 351,
          Iain: 611,
        },
      },
      {
        at: "2024-06-23T04:38:08.245Z",
        stacks: {
          Jeremy: 358,
          Robbie: 431,
          Iain: 611,
        },
      },
      {
        at: "2024-06-23T04:38:28.491Z",
        stacks: {
          Jeremy: 348,
          Robbie: 441,
          Iain: 611,
        },
      },
      {
        at: "2024-06-23T04:39:28.974Z",
        stacks: {
          Jeremy: 508,
          Robbie: 361,
          Iain: 531,
        },
      },
      {
        at: "2024-06-23T04:40:18.655Z",
        stacks: {
          Jeremy: 488,
          Robbie: 401,
          Iain: 511,
        },
      },
      {
        at: "2024-06-23T04:40:51.105Z",
        stacks: {
          Jeremy: 478,
          Robbie: 431,
          Iain: 491,
        },
      },
      {
        at: "2024-06-23T04:41:16.345Z",
        stacks: {
          Jeremy: 478,
          Robbie: 451,
          Iain: 471,
        },
      },
      {
        at: "2024-06-23T04:42:19.257Z",
        stacks: {
          Jeremy: 438,
          Robbie: 511,
          Iain: 451,
        },
      },
      {
        at: "2024-06-23T04:43:23.040Z",
        stacks: {
          Jeremy: 428,
          Robbie: 447,
          Iain: 525,
        },
      },
      {
        at: "2024-06-23T04:43:55.128Z",
        stacks: {
          Jeremy: 468,
          Robbie: 427,
          Iain: 505,
        },
      },
      {
        at: "2024-06-23T04:44:28.721Z",
        stacks: {
          Jeremy: 448,
          Robbie: 457,
          Iain: 495,
        },
      },
      {
        at: "2024-06-23T04:45:27.488Z",
        stacks: {
          Jeremy: 428,
          Robbie: 437,
          Iain: 535,
        },
      },
      {
        at: "2024-06-23T04:46:15.126Z",
        stacks: {
          Jeremy: 388,
          Robbie: 427,
          Iain: 585,
        },
      },
      {
        at: "2024-06-23T04:47:18.740Z",
        stacks: {
          Jeremy: 408,
          Robbie: 427,
          Iain: 565,
        },
      },
      {
        at: "2024-06-23T04:48:12.016Z",
        stacks: {
          Jeremy: 388,
          Robbie: 507,
          Iain: 505,
        },
      },
      {
        at: "2024-06-23T04:48:53.274Z",
        stacks: {
          Jeremy: 388,
          Robbie: 527,
          Iain: 485,
        },
      },
      {
        at: "2024-06-23T04:49:42.438Z",
        stacks: {
          Jeremy: 368,
          Robbie: 567,
          Iain: 465,
        },
      },
      {
        at: "2024-06-23T04:51:18.671Z",
        stacks: {
          Jeremy: 348,
          Robbie: 145,
          Iain: 907,
        },
      },
      {
        at: "2024-06-23T04:51:39.980Z",
        stacks: {
          Jeremy: 348,
          Robbie: 135,
          Iain: 917,
        },
      },
      {
        at: "2024-06-23T04:52:29.295Z",
        stacks: {
          Jeremy: 368,
          Robbie: 135,
          Iain: 897,
        },
      },
      {
        at: "2024-06-23T04:52:57.553Z",
        stacks: {
          Jeremy: 408,
          Robbie: 115,
          Iain: 877,
        },
      },
      {
        at: "2024-06-23T04:53:19.112Z",
        stacks: {
          Jeremy: 408,
          Robbie: 135,
          Iain: 857,
        },
      },
      {
        at: "2024-06-23T04:53:55.773Z",
        stacks: {
          Jeremy: 388,
          Robbie: 175,
          Iain: 837,
        },
      },
      {
        at: "2024-06-23T04:55:29.150Z",
        stacks: {
          Jeremy: 260,
          Robbie: 155,
          Iain: 985,
        },
      },
      {
        at: "2024-06-23T04:56:43.104Z",
        stacks: {
          Jeremy: 240,
          Robbie: 42,
          Iain: 1118,
        },
      },
      {
        at: "2024-06-23T04:57:26.640Z",
        stacks: {
          Jeremy: 260,
          Robbie: 42,
          Iain: 1098,
        },
      },
      {
        at: "2024-06-23T04:58:39.486Z",
        stacks: {
          Jeremy: 322,
          Iain: 1078,
        },
      },
      {
        at: "2024-06-23T04:59:06.436Z",
        stacks: {
          Jeremy: 342,
          Iain: 1058,
        },
      },
      {
        at: "2024-06-23T04:59:14.058Z",
        stacks: {
          Jeremy: 352,
          Iain: 1048,
        },
      },
      {
        at: "2024-06-23T04:59:47.735Z",
        stacks: {
          Jeremy: 372,
          Iain: 1028,
        },
      },
      {
        at: "2024-06-23T05:00:22.710Z",
        stacks: {
          Jeremy: 352,
          Iain: 1048,
        },
      },
      {
        at: "2024-06-23T05:00:31.622Z",
        stacks: {
          Jeremy: 342,
          Iain: 1058,
        },
      },
      {
        at: "2024-06-23T05:01:10.669Z",
        stacks: {
          Jeremy: 362,
          Iain: 1038,
        },
      },
      {
        at: "2024-06-23T05:01:47.186Z",
        stacks: {
          Jeremy: 322,
          Iain: 1078,
        },
      },
      {
        at: "2024-06-23T05:01:54.075Z",
        stacks: {
          Jeremy: 342,
          Iain: 1058,
        },
      },
      {
        at: "2024-06-23T05:02:27.746Z",
        stacks: {
          Jeremy: 422,
          Iain: 978,
        },
      },
      {
        at: "2024-06-23T05:02:48.782Z",
        stacks: {
          Jeremy: 382,
          Iain: 1018,
        },
      },
      {
        at: "2024-06-23T05:02:58.954Z",
        stacks: {
          Jeremy: 362,
          Iain: 1038,
        },
      },
      {
        at: "2024-06-23T05:03:47.789Z",
        stacks: {
          Jeremy: 442,
          Iain: 958,
        },
      },
      {
        at: "2024-06-23T05:04:16.050Z",
        stacks: {
          Jeremy: 482,
          Iain: 918,
        },
      },
      {
        at: "2024-06-23T05:04:25.677Z",
        stacks: {
          Jeremy: 502,
          Iain: 898,
        },
      },
      {
        at: "2024-06-23T05:04:48.852Z",
        stacks: {
          Jeremy: 462,
          Iain: 938,
        },
      },
      {
        at: "2024-06-23T05:04:56.013Z",
        stacks: {
          Jeremy: 482,
          Iain: 918,
        },
      },
      {
        at: "2024-06-23T05:05:02.314Z",
        stacks: {
          Jeremy: 462,
          Iain: 938,
        },
      },
      {
        at: "2024-06-23T05:05:39.551Z",
        stacks: {
          Jeremy: 502,
          Iain: 898,
        },
      },
      {
        at: "2024-06-23T05:05:57.548Z",
        stacks: {
          Jeremy: 482,
          Iain: 918,
        },
      },
      {
        at: "2024-06-23T05:06:22.971Z",
        stacks: {
          Jeremy: 442,
          Iain: 958,
        },
      },
      {
        at: "2024-06-23T05:06:30.095Z",
        stacks: {
          Jeremy: 422,
          Iain: 978,
        },
      },
      {
        at: "2024-06-23T05:06:49.359Z",
        stacks: {
          Jeremy: 442,
          Iain: 958,
        },
      },
      {
        at: "2024-06-23T05:06:57.106Z",
        stacks: {
          Jeremy: 422,
          Iain: 978,
        },
      },
      {
        at: "2024-06-23T05:07:39.045Z",
        stacks: {
          Jeremy: 542,
          Iain: 858,
        },
      },
      {
        at: "2024-06-23T05:08:12.927Z",
        stacks: {
          Jeremy: 622,
          Iain: 778,
        },
      },
      {
        at: "2024-06-23T05:08:55.582Z",
        stacks: {
          Jeremy: 742,
          Iain: 658,
        },
      },
      {
        at: "2024-06-23T05:09:34.180Z",
        stacks: {
          Jeremy: 662,
          Iain: 738,
        },
      },
      {
        at: "2024-06-23T05:10:23.320Z",
        stacks: {
          Jeremy: 622,
          Iain: 778,
        },
      },
      {
        at: "2024-06-23T05:10:48.663Z",
        stacks: {
          Jeremy: 582,
          Iain: 818,
        },
      },
      {
        at: "2024-06-23T05:10:54.817Z",
        stacks: {
          Jeremy: 602,
          Iain: 798,
        },
      },
      {
        at: "2024-06-23T05:11:13.226Z",
        stacks: {
          Jeremy: 582,
          Iain: 818,
        },
      },
      {
        at: "2024-06-23T05:11:18.745Z",
        stacks: {
          Jeremy: 602,
          Iain: 798,
        },
      },
      {
        at: "2024-06-23T05:11:27.350Z",
        stacks: {
          Jeremy: 582,
          Iain: 818,
        },
      },
      {
        at: "2024-06-23T05:11:45.921Z",
        stacks: {
          Jeremy: 542,
          Iain: 858,
        },
      },
      {
        at: "2024-06-23T05:12:21.994Z",
        stacks: {
          Jeremy: 502,
          Iain: 898,
        },
      },
      {
        at: "2024-06-23T05:12:45.336Z",
        stacks: {
          Jeremy: 462,
          Iain: 938,
        },
      },
      {
        at: "2024-06-23T05:12:57.241Z",
        stacks: {
          Jeremy: 442,
          Iain: 958,
        },
      },
      {
        at: "2024-06-23T05:13:32.617Z",
        stacks: {
          Jeremy: 402,
          Iain: 998,
        },
      },
      {
        at: "2024-06-23T05:13:44.223Z",
        stacks: {
          Jeremy: 382,
          Iain: 1018,
        },
      },
      {
        at: "2024-06-23T05:13:50.039Z",
        stacks: {
          Jeremy: 402,
          Iain: 998,
        },
      },
      {
        at: "2024-06-23T05:14:33.043Z",
        stacks: {
          Jeremy: 322,
          Iain: 1078,
        },
      },
      {
        at: "2024-06-23T05:14:39.597Z",
        stacks: {
          Jeremy: 342,
          Iain: 1058,
        },
      },
      {
        at: "2024-06-23T05:14:46.832Z",
        stacks: {
          Jeremy: 322,
          Iain: 1078,
        },
      },
      {
        at: "2024-06-23T05:15:12.643Z",
        stacks: {
          Jeremy: 402,
          Iain: 998,
        },
      },
      {
        at: "2024-06-23T05:15:19.851Z",
        stacks: {
          Jeremy: 382,
          Iain: 1018,
        },
      },
      {
        at: "2024-06-23T05:15:28.052Z",
        stacks: {
          Jeremy: 402,
          Iain: 998,
        },
      },
      {
        at: "2024-06-23T05:15:34.670Z",
        stacks: {
          Jeremy: 382,
          Iain: 1018,
        },
      },
      {
        at: "2024-06-23T05:16:05.662Z",
        stacks: {
          Jeremy: 502,
          Iain: 898,
        },
      },
      {
        at: "2024-06-23T05:16:55.697Z",
        stacks: {
          Jeremy: 462,
          Iain: 938,
        },
      },
      {
        at: "2024-06-23T05:17:03.151Z",
        stacks: {
          Jeremy: 482,
          Iain: 918,
        },
      },
      {
        at: "2024-06-23T05:17:55.458Z",
        stacks: {
          Jeremy: 522,
          Iain: 878,
        },
      },
      {
        at: "2024-06-23T05:18:51.020Z",
        stacks: {
          Jeremy: 402,
          Iain: 998,
        },
      },
    ],
    hands: 180,
    flops: 152,
    turns: 108,
    rivers: 81,
    allIns: 16,
    largestPots: [
      {
        name: "Iain",
        pot: 864,
      },
      {
        name: "Iain",
        pot: 804,
      },
      {
        name: "Jeremy",
        pot: 548,
      },
      {
        name: "Iain",
        pot: 276,
      },
      {
        name: "Iain",
        pot: 262,
      },
      {
        name: "Robbie",
        pot: 252,
      },
      {
        name: "Iain",
        pot: 246,
      },
      {
        name: "Jeremy",
        pot: 240,
      },
      {
        name: "Jeremy",
        pot: 240,
      },
      {
        name: "Jeremy",
        pot: 240,
      },
    ],
    exits: [
      {
        name: "Jeremy",
        at: "2024-06-23T05:19:45.541Z",
      },
      {
        name: "Robbie",
        at: "2024-06-23T04:58:39.486Z",
      },
      {
        name: "Ev",
        at: "2024-06-23T04:37:05.459Z",
      },
      {
        name: "Phil",
        at: "2024-06-23T04:12:55.445Z",
      },
      {
        name: "Andrew",
        at: "2024-06-23T04:07:53.935Z",
      },
      {
        name: "deth",
        at: "2024-06-23T03:32:05.975Z",
      },
    ],
    potsWon: {
      Iain: 57,
      Phil: 11,
      Robbie: 39,
      deth: 3,
      Andrew: 10,
      Ev: 15,
      Jeremy: 50,
    },
    players: ["deth", "Iain", "Phil", "Andrew", "Robbie", "Jeremy", "Ev"],
  },
  july: {
    stacks: [
      {
        at: "2024-07-20T02:00:22.486Z",
        stacks: {
          Apples: 200,
          Phil: 200,
          Iain: 200,
          Evan: 200,
          Jeremy: 200,
          deth: 200,
          Alec: 200,
          Robbie: 200,
          Beauch: 200,
          Pete: 200,
        },
      },
      {
        at: "2024-07-20T02:02:20.665Z",
        stacks: {
          Apples: 200,
          Phil: 198,
          Iain: 198,
          Evan: 199,
          Jeremy: 173,
          deth: 200,
          Alec: 198,
          Robbie: 238,
          Beauch: 198,
          Pete: 198,
        },
      },
      {
        at: "2024-07-20T02:05:51.114Z",
        stacks: {
          Apples: 200,
          Phil: 198,
          Iain: 198,
          Evan: 281,
          Jeremy: 171,
          deth: 161,
          Alec: 198,
          Robbie: 236,
          Beauch: 198,
          Pete: 159,
        },
      },
      {
        at: "2024-07-20T02:20:13.902Z",
        stacks: {
          Pete: 159,
          Phil: 198,
          Robbie: 236,
          Andrew: 200,
          deth: 160,
        },
      },
      {
        at: "2024-07-20T02:22:30.243Z",
        stacks: {
          Apples: 200,
          Iain: 198,
          Evan: 281,
          Jeremy: 184,
          Alec: 188,
          Beauch: 198,
        },
      },
      {
        at: "2024-07-20T02:22:50.337Z",
        stacks: {
          Pete: 155,
          Phil: 172,
          Robbie: 292,
          Andrew: 200,
          deth: 134,
        },
      },
      {
        at: "2024-07-20T02:24:08.223Z",
        stacks: {
          Apples: 200,
          Iain: 202,
          Evan: 285,
          Jeremy: 184,
          Alec: 182,
          Beauch: 196,
        },
      },
      {
        at: "2024-07-20T02:25:12.340Z",
        stacks: {
          Pete: 149,
          Phil: 166,
          Robbie: 288,
          Andrew: 196,
          deth: 154,
        },
      },
      {
        at: "2024-07-20T02:25:22.342Z",
        stacks: {
          Apples: 198,
          Iain: 202,
          Evan: 283,
          Jeremy: 191,
          Alec: 180,
          Beauch: 195,
        },
      },
      {
        at: "2024-07-20T02:27:12.552Z",
        stacks: {
          Apples: 197,
          Pete: 145,
          Phil: 162,
          Robbie: 284,
          Andrew: 212,
          deth: 150,
        },
      },
      {
        at: "2024-07-20T02:27:19.836Z",
        stacks: {
          Iain: 200,
          Evan: 283,
          Jeremy: 189,
          Alec: 185,
          Beauch: 195,
        },
      },
      {
        at: "2024-07-20T02:28:42.677Z",
        stacks: {
          Apples: 195,
          Pete: 145,
          Phil: 158,
          Robbie: 284,
          Andrew: 222,
          deth: 146,
        },
      },
      {
        at: "2024-07-20T02:29:49.329Z",
        stacks: {
          Iain: 199,
          Evan: 281,
          Jeremy: 189,
          Alec: 187,
          Beauch: 196,
        },
      },
      {
        at: "2024-07-20T02:30:41.076Z",
        stacks: {
          Iain: 199,
          Evan: 283,
          Jeremy: 187,
          Alec: 187,
          Beauch: 196,
        },
      },
      {
        at: "2024-07-20T02:31:15.628Z",
        stacks: {
          Apples: 193,
          Pete: 141,
          Phil: 180,
          Robbie: 270,
          Andrew: 220,
          deth: 146,
        },
      },
      {
        at: "2024-07-20T02:32:10.759Z",
        stacks: {
          Apples: 193,
          Pete: 140,
          Phil: 183,
          Robbie: 268,
          Andrew: 220,
          deth: 146,
        },
      },
      {
        at: "2024-07-20T02:32:33.139Z",
        stacks: {
          Iain: 251,
          Evan: 283,
          Jeremy: 180,
          Alec: 142,
          Beauch: 196,
        },
      },
      {
        at: "2024-07-20T02:34:02.261Z",
        stacks: {
          Apples: 193,
          Pete: 138,
          Phil: 141,
          Robbie: 314,
          Andrew: 218,
          deth: 146,
        },
      },
      {
        at: "2024-07-20T02:34:19.363Z",
        stacks: {
          Iain: 251,
          Evan: 283,
          Jeremy: 184,
          Alec: 140,
          Beauch: 194,
        },
      },
      {
        at: "2024-07-20T02:35:56.905Z",
        stacks: {
          Iain: 249,
          Evan: 281,
          Jeremy: 184,
          Alec: 145,
          Beauch: 193,
        },
      },
      {
        at: "2024-07-20T02:36:24.096Z",
        stacks: {
          Apples: 189,
          Pete: 138,
          Phil: 139,
          Robbie: 336,
          Andrew: 216,
          deth: 132,
        },
      },
      {
        at: "2024-07-20T02:36:57.669Z",
        stacks: {
          Iain: 270,
          Evan: 274,
          Jeremy: 184,
          Alec: 138,
          Beauch: 186,
        },
      },
      {
        at: "2024-07-20T02:37:22.341Z",
        stacks: {
          Iain: 275,
          Evan: 273,
          Jeremy: 182,
          Alec: 136,
          Beauch: 186,
        },
      },
      {
        at: "2024-07-20T02:38:08.553Z",
        stacks: {
          Iain: 275,
          Evan: 271,
          Jeremy: 186,
          Alec: 134,
          Beauch: 186,
        },
      },
      {
        at: "2024-07-20T02:38:23.176Z",
        stacks: {
          Apples: 187,
          Pete: 121,
          Phil: 139,
          Robbie: 309,
          Andrew: 264,
          deth: 130,
        },
      },
      {
        at: "2024-07-20T02:39:58.438Z",
        stacks: {
          Iain: 265,
          Evan: 265,
          Jeremy: 186,
          Alec: 128,
          Beauch: 208,
        },
      },
      {
        at: "2024-07-20T02:40:06.933Z",
        stacks: {
          Apples: 175,
          Pete: 121,
          Phil: 216,
          Robbie: 257,
          Andrew: 252,
          deth: 129,
        },
      },
      {
        at: "2024-07-20T02:41:20.028Z",
        stacks: {
          Iain: 270,
          Evan: 265,
          Jeremy: 184,
          Alec: 126,
          Beauch: 207,
        },
      },
      {
        at: "2024-07-20T02:41:57.966Z",
        stacks: {
          Apples: 173,
          Pete: 175,
          Phil: 216,
          Robbie: 211,
          Andrew: 246,
          deth: 129,
        },
      },
      {
        at: "2024-07-20T02:42:30.916Z",
        stacks: {
          Iain: 274,
          Evan: 263,
          Jeremy: 182,
          Alec: 126,
          Beauch: 207,
        },
      },
      {
        at: "2024-07-20T02:43:49.672Z",
        stacks: {
          Iain: 274,
          Evan: 275,
          Jeremy: 174,
          Alec: 124,
          Beauch: 205,
        },
      },
      {
        at: "2024-07-20T02:45:00.141Z",
        stacks: {
          Iain: 294,
          Evan: 275,
          Jeremy: 163,
          Alec: 117,
          Beauch: 203,
        },
      },
      {
        at: "2024-07-20T02:45:25.728Z",
        stacks: {
          Apples: 155,
          Pete: 231,
          Phil: 214,
          Robbie: 209,
          Andrew: 228,
          deth: 113,
        },
      },
      {
        at: "2024-07-20T02:46:15.816Z",
        stacks: {
          Iain: 294,
          Evan: 281,
          Jeremy: 163,
          Alec: 115,
          Beauch: 199,
        },
      },
      {
        at: "2024-07-20T02:46:36.845Z",
        stacks: {
          Iain: 296,
          Evan: 281,
          Jeremy: 163,
          Alec: 115,
          Beauch: 197,
        },
      },
      {
        at: "2024-07-20T02:47:34.616Z",
        stacks: {
          Iain: 308,
          Evan: 277,
          Jeremy: 159,
          Alec: 115,
          Beauch: 193,
        },
      },
      {
        at: "2024-07-20T02:47:42.849Z",
        stacks: {
          Apples: 113,
          Pete: 231,
          Phil: 278,
          Robbie: 197,
          Andrew: 223,
          deth: 108,
        },
      },
      {
        at: "2024-07-20T02:48:48.591Z",
        stacks: {
          Iain: 284,
          Evan: 309,
          Jeremy: 155,
          Alec: 111,
          Beauch: 193,
        },
      },
      {
        at: "2024-07-20T02:49:59.590Z",
        stacks: {
          Apples: 113,
          Pete: 231,
          Phil: 278,
          Robbie: 195,
          Andrew: 217,
          deth: 116,
        },
      },
      {
        at: "2024-07-20T02:50:22.454Z",
        stacks: {
          Iain: 284,
          Evan: 309,
          Jeremy: 151,
          Alec: 83,
          Beauch: 225,
        },
      },
      {
        at: "2024-07-20T02:51:25.470Z",
        stacks: {
          Iain: 284,
          Evan: 305,
          Jeremy: 151,
          Alec: 91,
          Beauch: 221,
        },
      },
      {
        at: "2024-07-20T02:52:17.301Z",
        stacks: {
          Apples: 111,
          Pete: 229,
          Phil: 315,
          Robbie: 195,
          Andrew: 198,
          deth: 102,
        },
      },
      {
        at: "2024-07-20T02:53:30.444Z",
        stacks: {
          Iain: 239,
          Evan: 305,
          Jeremy: 151,
          Alec: 71,
          Beauch: 286,
        },
      },
      {
        at: "2024-07-20T02:53:49.266Z",
        stacks: {
          Apples: 107,
          Pete: 221,
          Phil: 337,
          Robbie: 195,
          Andrew: 190,
          deth: 100,
        },
      },
      {
        at: "2024-07-20T02:55:34.554Z",
        stacks: {
          Iain: 235,
          Evan: 301,
          Jeremy: 151,
          Alec: 79,
        },
      },
      {
        at: "2024-07-20T02:55:59.859Z",
        stacks: {
          Apples: 95,
          Pete: 209,
          Phil: 333,
          Robbie: 235,
          Andrew: 190,
          deth: 88,
        },
      },
      {
        at: "2024-07-20T02:56:31.126Z",
        stacks: {
          Iain: 235,
          Evan: 309,
          Jeremy: 147,
          Alec: 75,
        },
      },
      {
        at: "2024-07-20T02:57:35.541Z",
        stacks: {
          Iain: 235,
          Evan: 309,
          Jeremy: 155,
          Alec: 67,
        },
      },
      {
        at: "2024-07-20T02:57:40.729Z",
        stacks: {
          Apples: 95,
          Pete: 205,
          Phil: 345,
          Robbie: 231,
          Andrew: 186,
          deth: 88,
        },
      },
      {
        at: "2024-07-20T02:59:07.709Z",
        stacks: {
          Iain: 252,
          Evan: 309,
          Jeremy: 155,
          Alec: 50,
        },
      },
      {
        at: "2024-07-20T03:00:49.321Z",
        stacks: {
          Iain: 236,
          Evan: 333,
          Jeremy: 151,
          Alec: 46,
          Beauch: 286,
        },
      },
      {
        at: "2024-07-20T03:01:00.767Z",
        stacks: {
          Apples: 79,
          Pete: 169,
          Phil: 329,
          Robbie: 339,
          Andrew: 150,
          deth: 84,
        },
      },
      {
        at: "2024-07-20T03:02:43.237Z",
        stacks: {
          Apples: 99,
          Pete: 169,
          Phil: 329,
          Robbie: 331,
          Andrew: 138,
          deth: 84,
        },
      },
      {
        at: "2024-07-20T03:02:43.323Z",
        stacks: {
          Iain: 256,
          Evan: 329,
          Jeremy: 141,
          Alec: 46,
          Beauch: 280,
        },
      },
      {
        at: "2024-07-20T03:03:17.101Z",
        stacks: {
          Iain: 256,
          Evan: 329,
          Jeremy: 139,
          Alec: 48,
          Beauch: 280,
        },
      },
      {
        at: "2024-07-20T03:04:54.649Z",
        stacks: {
          Iain: 256,
          Evan: 341,
          Jeremy: 139,
          Alec: 44,
          Beauch: 272,
        },
      },
      {
        at: "2024-07-20T03:05:33.650Z",
        stacks: {
          Apples: 99,
          Pete: 161,
          Phil: 353,
          Robbie: 327,
          Andrew: 130,
          deth: 80,
        },
      },
      {
        at: "2024-07-20T03:07:15.074Z",
        stacks: {
          Iain: 252,
          Evan: 325,
          Jeremy: 139,
          Alec: 68,
          Beauch: 268,
        },
      },
      {
        at: "2024-07-20T03:07:35.807Z",
        stacks: {
          Apples: 83,
          Pete: 161,
          Phil: 391,
          Robbie: 311,
          Andrew: 126,
          deth: 78,
        },
      },
      {
        at: "2024-07-20T03:08:24.055Z",
        stacks: {
          Iain: 256,
          Evan: 321,
          Jeremy: 139,
          Alec: 68,
          Beauch: 268,
        },
      },
      {
        at: "2024-07-20T03:08:59.216Z",
        stacks: {
          Apples: 95,
          Pete: 157,
          Phil: 391,
          Robbie: 307,
          Andrew: 122,
        },
      },
      {
        at: "2024-07-20T03:09:39.108Z",
        stacks: {
          Iain: 256,
          Evan: 319,
          Jeremy: 153,
          Alec: 60,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:10:24.127Z",
        stacks: {
          Apples: 95,
          Pete: 155,
          Phil: 387,
          Robbie: 307,
          Andrew: 128,
        },
      },
      {
        at: "2024-07-20T03:11:46.142Z",
        stacks: {
          Iain: 252,
          Evan: 315,
          Jeremy: 141,
          Alec: 80,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:12:00.167Z",
        stacks: {
          Apples: 119,
          Pete: 147,
          Phil: 375,
          Robbie: 303,
          Andrew: 128,
        },
      },
      {
        at: "2024-07-20T03:12:28.951Z",
        stacks: {
          Apples: 119,
          Pete: 147,
          Phil: 375,
          Robbie: 307,
          Andrew: 124,
        },
      },
      {
        at: "2024-07-20T03:12:43.570Z",
        stacks: {
          Iain: 248,
          Evan: 315,
          Jeremy: 141,
          Alec: 88,
          Beauch: 260,
        },
      },
      {
        at: "2024-07-20T03:14:00.248Z",
        stacks: {
          Apples: 115,
          Pete: 159,
          Phil: 375,
          Robbie: 303,
          Andrew: 120,
        },
      },
      {
        at: "2024-07-20T03:14:16.657Z",
        stacks: {
          Iain: 244,
          Evan: 333,
          Jeremy: 141,
          Alec: 76,
          Beauch: 258,
        },
      },
      {
        at: "2024-07-20T03:16:19.601Z",
        stacks: {
          Iain: 344,
          Evan: 325,
          Jeremy: 141,
          Alec: 60,
          Beauch: 182,
        },
      },
      {
        at: "2024-07-20T03:16:38.386Z",
        stacks: {
          Apples: 111,
          Pete: 155,
          Phil: 367,
          Robbie: 291,
          Andrew: 148,
        },
      },
      {
        at: "2024-07-20T03:17:37.650Z",
        stacks: {
          Iain: 344,
          Evan: 337,
          Jeremy: 135,
          Alec: 54,
          Beauch: 182,
        },
      },
      {
        at: "2024-07-20T03:18:31.760Z",
        stacks: {
          Iain: 344,
          Evan: 337,
          Jeremy: 129,
          Alec: 78,
          Beauch: 164,
        },
      },
      {
        at: "2024-07-20T03:19:05.741Z",
        stacks: {
          Apples: 111,
          Pete: 143,
          Phil: 363,
          Robbie: 311,
          Andrew: 144,
          deth: 78,
        },
      },
      {
        at: "2024-07-20T03:20:02.000Z",
        stacks: {
          Iain: 390,
          Evan: 308,
          Jeremy: 129,
          Alec: 75,
          Beauch: 150,
        },
      },
      {
        at: "2024-07-20T03:20:56.597Z",
        stacks: {
          Iain: 399,
          Evan: 302,
          Jeremy: 129,
          Alec: 75,
        },
      },
      {
        at: "2024-07-20T03:22:01.033Z",
        stacks: {
          Apples: 111,
          Phil: 359,
          Robbie: 341,
          Andrew: 124,
          deth: 72,
        },
      },
      {
        at: "2024-07-20T03:22:27.373Z",
        stacks: {
          Iain: 440,
          Evan: 290,
          Jeremy: 129,
          Alec: 46,
        },
      },
      {
        at: "2024-07-20T03:23:18.532Z",
        stacks: {
          Apples: 111,
          Pete: 143,
          Phil: 351,
          Robbie: 333,
          Andrew: 120,
          deth: 92,
        },
      },
      {
        at: "2024-07-20T03:23:58.015Z",
        stacks: {
          Iain: 440,
          Evan: 260,
          Jeremy: 189,
          Alec: 16,
        },
      },
      {
        at: "2024-07-20T03:25:36.488Z",
        stacks: {
          Apples: 111,
          Pete: 131,
          Phil: 459,
          Robbie: 315,
          Andrew: 60,
          deth: 74,
        },
      },
      {
        at: "2024-07-20T03:26:06.351Z",
        stacks: {
          Iain: 440,
          Evan: 242,
          Jeremy: 223,
        },
      },
      {
        at: "2024-07-20T03:26:23.088Z",
        stacks: {
          Iain: 440,
          Evan: 242,
          Jeremy: 223,
        },
      },
      {
        at: "2024-07-20T03:27:11.742Z",
        stacks: {
          Apples: 138,
          Pete: 125,
          Phil: 453,
          Robbie: 309,
          Andrew: 54,
          deth: 71,
        },
      },
      {
        at: "2024-07-20T03:27:42.279Z",
        stacks: {
          Iain: 428,
          Evan: 254,
          Jeremy: 223,
          Beauch: 147,
        },
      },
      {
        at: "2024-07-20T03:28:43.674Z",
        stacks: {
          Apples: 120,
          Pete: 119,
          Phil: 453,
          Robbie: 333,
          Andrew: 54,
          deth: 71,
        },
      },
      {
        at: "2024-07-20T03:29:30.004Z",
        stacks: {
          Iain: 422,
          Evan: 251,
          Jeremy: 241,
          Beauch: 138,
        },
      },
      {
        at: "2024-07-20T03:30:27.568Z",
        stacks: {
          Apples: 114,
          Pete: 113,
          Phil: 465,
          Robbie: 333,
          Andrew: 54,
          deth: 71,
        },
      },
      {
        at: "2024-07-20T03:30:46.420Z",
        stacks: {
          Iain: 422,
          Evan: 251,
          Jeremy: 247,
          Beauch: 132,
        },
      },
      {
        at: "2024-07-20T03:32:18.779Z",
        stacks: {
          Apples: 108,
          Pete: 107,
          Phil: 495,
          Robbie: 321,
          Andrew: 54,
          deth: 65,
        },
      },
      {
        at: "2024-07-20T03:33:07.752Z",
        stacks: {
          Iain: 416,
          Evan: 251,
          Jeremy: 115,
          Beauch: 270,
        },
      },
      {
        at: "2024-07-20T03:33:52.778Z",
        stacks: {
          Apples: 108,
          Pete: 107,
          Phil: 495,
          Robbie: 303,
          Andrew: 48,
          deth: 89,
        },
      },
      {
        at: "2024-07-20T03:34:18.842Z",
        stacks: {
          Iain: 428,
          Evan: 245,
          Jeremy: 115,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:35:09.558Z",
        stacks: {
          Iain: 422,
          Evan: 242,
          Jeremy: 124,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:35:40.092Z",
        stacks: {
          Iain: 431,
          Evan: 242,
          Jeremy: 121,
          Beauch: 258,
        },
      },
      {
        at: "2024-07-20T03:36:02.162Z",
        stacks: {
          Apples: 108,
          Pete: 107,
          Phil: 483,
          Robbie: 327,
          Andrew: 42,
          deth: 83,
        },
      },
      {
        at: "2024-07-20T03:37:12.063Z",
        stacks: {
          Apples: 102,
          Pete: 101,
          Phil: 477,
          Robbie: 327,
          Andrew: 63,
          deth: 80,
        },
      },
      {
        at: "2024-07-20T03:37:15.475Z",
        stacks: {
          Iain: 437,
          Evan: 242,
          Jeremy: 121,
          Beauch: 252,
        },
      },
      {
        at: "2024-07-20T03:38:38.110Z",
        stacks: {
          Iain: 431,
          Evan: 236,
          Jeremy: 121,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:38:52.727Z",
        stacks: {
          Apples: 99,
          Pete: 148,
          Phil: 471,
          Robbie: 295,
          Andrew: 63,
          deth: 74,
        },
      },
      {
        at: "2024-07-20T03:39:56.132Z",
        stacks: {
          Iain: 425,
          Evan: 230,
          Jeremy: 133,
          Beauch: 264,
        },
      },
      {
        at: "2024-07-20T03:40:47.480Z",
        stacks: {
          Apples: 99,
          Pete: 208,
          Phil: 465,
          Robbie: 253,
          Andrew: 57,
          deth: 68,
        },
      },
      {
        at: "2024-07-20T03:40:54.109Z",
        stacks: {
          Iain: 425,
          Evan: 230,
          Jeremy: 115,
          Beauch: 282,
        },
      },
      {
        at: "2024-07-20T03:42:19.341Z",
        stacks: {
          Iain: 419,
          Evan: 230,
          Jeremy: 127,
          Beauch: 276,
        },
      },
      {
        at: "2024-07-20T03:42:21.546Z",
        stacks: {
          Apples: 99,
          Pete: 226,
          Phil: 459,
          Robbie: 247,
          Andrew: 51,
        },
      },
      {
        at: "2024-07-20T03:43:42.367Z",
        stacks: {
          Iain: 422,
          Evan: 233,
          Jeremy: 127,
          Beauch: 270,
        },
      },
      {
        at: "2024-07-20T03:43:53.331Z",
        stacks: {
          Iain: 422,
          Evan: 230,
          Jeremy: 130,
          Beauch: 270,
        },
      },
      {
        at: "2024-07-20T03:44:03.911Z",
        stacks: {
          Apples: 99,
          Pete: 268,
          Phil: 435,
          Robbie: 235,
          Andrew: 45,
        },
      },
      {
        at: "2024-07-20T03:45:05.039Z",
        stacks: {
          Iain: 422,
          Evan: 230,
          Jeremy: 124,
          Beauch: 276,
        },
      },
      {
        at: "2024-07-20T03:45:53.303Z",
        stacks: {
          Apples: 75,
          Pete: 256,
          Phil: 429,
          Robbie: 289,
          Andrew: 33,
        },
      },
      {
        at: "2024-07-20T03:46:52.823Z",
        stacks: {
          Iain: 375,
          Evan: 208,
          Jeremy: 196,
          Beauch: 273,
        },
      },
      {
        at: "2024-07-20T03:47:16.737Z",
        stacks: {
          Apples: 37,
          Pete: 300,
          Phil: 423,
          Robbie: 289,
          Andrew: 33,
        },
      },
      {
        at: "2024-07-20T03:48:27.893Z",
        stacks: {
          Iain: 367,
          Evan: 232,
          Jeremy: 188,
          Beauch: 265,
        },
      },
      {
        at: "2024-07-20T03:49:11.318Z",
        stacks: {
          Apples: 4,
          Pete: 282,
          Phil: 411,
          Robbie: 289,
          Andrew: 96,
        },
      },
      {
        at: "2024-07-20T03:50:30.383Z",
        stacks: {
          Iain: 397,
          Evan: 228,
          Jeremy: 162,
          Beauch: 265,
        },
      },
      {
        at: "2024-07-20T03:50:41.091Z",
        stacks: {
          Pete: 282,
          Phil: 405,
          Robbie: 305,
          Andrew: 90,
          deth: 68,
        },
      },
      {
        at: "2024-07-20T03:51:54.798Z",
        stacks: {
          Iain: 429,
          Evan: 228,
          Jeremy: 146,
          Beauch: 249,
        },
      },
      {
        at: "2024-07-20T04:04:26.020Z",
        stacks: {
          Iain: 380,
          Evan: 228,
          Jeremy: 146,
          Robbie: 293,
          Phil: 399,
          dethy: 104,
          Beauch: 298,
        },
      },
      {
        at: "2024-07-20T04:06:42.498Z",
        stacks: {
          Andrew: 78,
          Iain: 448,
          Evan: 220,
          Jeremy: 146,
          Robbie: 257,
          Phil: 375,
          dethy: 104,
          Beauch: 298,
          Pete: 276,
        },
      },
      {
        at: "2024-07-20T04:08:44.856Z",
        stacks: {
          Andrew: 78,
          Iain: 448,
          Evan: 204,
          Jeremy: 138,
          Robbie: 249,
          Phil: 367,
          dethy: 104,
          Beauch: 298,
          Pete: 316,
        },
      },
      {
        at: "2024-07-20T04:11:17.355Z",
        stacks: {
          Andrew: 70,
          Iain: 448,
          Evan: 204,
          Jeremy: 130,
          Robbie: 162,
          Phil: 367,
          dethy: 104,
          Beauch: 290,
          Pete: 427,
        },
      },
      {
        at: "2024-07-20T04:12:39.122Z",
        stacks: {
          Andrew: 70,
          Iain: 416,
          Evan: 204,
          Jeremy: 98,
          Robbie: 158,
          Phil: 451,
          dethy: 104,
          Beauch: 290,
          Pete: 411,
        },
      },
      {
        at: "2024-07-20T04:14:18.838Z",
        stacks: {
          Andrew: 70,
          Iain: 408,
          Evan: 204,
          Jeremy: 98,
          Robbie: 158,
          Phil: 443,
          dethy: 96,
          Beauch: 290,
          Pete: 435,
        },
      },
      {
        at: "2024-07-20T04:17:13.923Z",
        stacks: {
          Andrew: 70,
          Iain: 408,
          Evan: 108,
          Jeremy: 98,
          Robbie: 158,
          Phil: 443,
          dethy: 208,
          Beauch: 282,
          Pete: 427,
        },
      },
      {
        at: "2024-07-20T04:19:19.494Z",
        stacks: {
          Andrew: 54,
          Iain: 400,
          Evan: 108,
          Jeremy: 98,
          Robbie: 142,
          Phil: 536,
          dethy: 208,
          Beauch: 278,
          Pete: 378,
        },
      },
      {
        at: "2024-07-20T04:21:21.127Z",
        stacks: {
          Andrew: 46,
          Iain: 400,
          Evan: 224,
          Jeremy: 98,
          Robbie: 142,
          Phil: 536,
          dethy: 208,
          Beauch: 278,
          Pete: 270,
        },
      },
      {
        at: "2024-07-20T04:23:23.518Z",
        stacks: {
          Andrew: 42,
          Iain: 392,
          Evan: 208,
          Jeremy: 98,
          Robbie: 78,
          Phil: 628,
          dethy: 208,
          Beauch: 278,
          Pete: 270,
        },
      },
      {
        at: "2024-07-20T04:25:38.798Z",
        stacks: {
          Andrew: 34,
          Iain: 384,
          Evan: 200,
          Jeremy: 130,
          Robbie: 70,
          Phil: 628,
          dethy: 208,
          Beauch: 278,
          Pete: 270,
        },
      },
      {
        at: "2024-07-20T04:28:13.715Z",
        stacks: {
          Andrew: 34,
          Iain: 384,
          Evan: 176,
          Robbie: 70,
          Phil: 620,
          dethy: 208,
          Beauch: 448,
          Pete: 262,
        },
      },
      {
        at: "2024-07-20T04:30:57.586Z",
        stacks: {
          Andrew: 34,
          Iain: 384,
          Evan: 176,
          Phil: 790,
          dethy: 128,
          Beauch: 438,
          Pete: 252,
        },
      },
      {
        at: "2024-07-20T04:33:37.565Z",
        stacks: {
          Andrew: 34,
          Iain: 354,
          Evan: 156,
          Phil: 780,
          dethy: 208,
          Beauch: 428,
          Pete: 242,
        },
      },
      {
        at: "2024-07-20T04:35:28.473Z",
        stacks: {
          Andrew: 122,
          Iain: 314,
          Evan: 156,
          Phil: 770,
          dethy: 198,
          Beauch: 428,
          Pete: 214,
        },
      },
      {
        at: "2024-07-20T04:36:38.093Z",
        stacks: {
          Andrew: 122,
          Iain: 314,
          Evan: 156,
          Phil: 760,
          dethy: 178,
          Beauch: 458,
          Pete: 214,
        },
      },
      {
        at: "2024-07-20T04:37:49.108Z",
        stacks: {
          Andrew: 112,
          Iain: 314,
          Evan: 156,
          Phil: 750,
          dethy: 178,
          Beauch: 448,
          Pete: 244,
        },
      },
      {
        at: "2024-07-20T04:39:28.661Z",
        stacks: {
          Andrew: 102,
          Iain: 158,
          Evan: 367,
          Phil: 730,
          dethy: 178,
          Beauch: 428,
          Pete: 239,
        },
      },
      {
        at: "2024-07-20T04:41:05.404Z",
        stacks: {
          Andrew: 97,
          Iain: 148,
          Evan: 367,
          Phil: 710,
          dethy: 233,
          Pete: 219,
        },
      },
      {
        at: "2024-07-20T04:43:15.431Z",
        stacks: {
          Andrew: 87,
          Iain: 138,
          Evan: 357,
          Phil: 801,
          dethy: 233,
          Beauch: 428,
          Pete: 158,
        },
      },
      {
        at: "2024-07-20T04:45:23.277Z",
        stacks: {
          Andrew: 87,
          Iain: 128,
          Evan: 337,
          Phil: 791,
          dethy: 213,
          Beauch: 428,
          Pete: 218,
        },
      },
      {
        at: "2024-07-20T04:47:51.697Z",
        stacks: {
          Andrew: 47,
          Iain: 128,
          Evan: 327,
          Phil: 781,
          dethy: 203,
          Beauch: 428,
          Pete: 288,
        },
      },
      {
        at: "2024-07-20T04:49:22.614Z",
        stacks: {
          Andrew: 47,
          Iain: 128,
          Evan: 327,
          Phil: 771,
          dethy: 198,
          Beauch: 463,
          Pete: 268,
        },
      },
      {
        at: "2024-07-20T04:50:41.363Z",
        stacks: {
          Andrew: 47,
          Iain: 128,
          Evan: 327,
          Phil: 761,
          dethy: 198,
          Beauch: 493,
          Pete: 248,
        },
      },
      {
        at: "2024-07-20T04:53:12.161Z",
        stacks: {
          Andrew: 117,
          Iain: 118,
          Evan: 317,
          Phil: 751,
          dethy: 178,
          Beauch: 483,
        },
      },
      {
        at: "2024-07-20T04:54:17.931Z",
        stacks: {
          Andrew: 112,
          Iain: 108,
          Evan: 317,
          Phil: 766,
          dethy: 178,
          Beauch: 483,
        },
      },
      {
        at: "2024-07-20T04:56:31.630Z",
        stacks: {
          Andrew: 102,
          Iain: 98,
          Evan: 347,
          Phil: 756,
          dethy: 178,
          Beauch: 483,
          Pete: 238,
        },
      },
      {
        at: "2024-07-20T04:58:31.735Z",
        stacks: {
          Andrew: 132,
          Iain: 98,
          Evan: 337,
          Phil: 746,
          dethy: 168,
          Beauch: 483,
          Pete: 238,
        },
      },
      {
        at: "2024-07-20T04:59:31.824Z",
        stacks: {
          Iain: 98,
          Evan: 337,
          Phil: 766,
          dethy: 148,
          Beauch: 483,
          Pete: 238,
        },
      },
      {
        at: "2024-07-20T05:00:52.761Z",
        stacks: {
          Iain: 98,
          Evan: 337,
          Phil: 766,
          dethy: 138,
          Beauch: 513,
          Pete: 218,
        },
      },
      {
        at: "2024-07-20T05:01:14.824Z",
        stacks: {
          Iain: 98,
          Evan: 337,
          Phil: 766,
          Beauch: 503,
          Pete: 228,
        },
      },
      {
        at: "2024-07-20T05:02:26.678Z",
        stacks: {
          Iain: 78,
          Evan: 397,
          Phil: 766,
          Beauch: 503,
          Pete: 188,
        },
      },
      {
        at: "2024-07-20T05:03:18.468Z",
        stacks: {
          Andrew: 132,
          Iain: 58,
          Evan: 477,
          Phil: 746,
          Beauch: 483,
          Pete: 168,
        },
      },
      {
        at: "2024-07-20T05:04:16.698Z",
        stacks: {
          Andrew: 62,
          Iain: 58,
          Evan: 457,
          Phil: 726,
          Beauch: 483,
          Pete: 278,
        },
      },
      {
        at: "2024-07-20T05:05:56.603Z",
        stacks: {
          Evan: 647,
          Phil: 716,
          Beauch: 463,
          Pete: 238,
        },
      },
      {
        at: "2024-07-20T05:07:23.299Z",
        stacks: {
          Evan: 627,
          Phil: 896,
          dethy: 138,
          Beauch: 343,
          Pete: 198,
        },
      },
      {
        at: "2024-07-20T05:09:02.133Z",
        stacks: {
          Evan: 567,
          Phil: 1114,
          Beauch: 343,
          Pete: 178,
        },
      },
      {
        at: "2024-07-20T05:10:07.179Z",
        stacks: {
          Evan: 547,
          Phil: 1214,
          Beauch: 323,
          Pete: 118,
        },
      },
      {
        at: "2024-07-20T05:11:02.650Z",
        stacks: {
          Evan: 547,
          Phil: 1194,
          Beauch: 363,
          Pete: 98,
        },
      },
      {
        at: "2024-07-20T05:11:42.935Z",
        stacks: {
          Evan: 547,
          Phil: 1174,
          Beauch: 353,
          Pete: 128,
        },
      },
      {
        at: "2024-07-20T05:13:05.015Z",
        stacks: {
          Evan: 507,
          Phil: 1174,
          Beauch: 263,
          Pete: 258,
        },
      },
      {
        at: "2024-07-20T05:13:47.805Z",
        stacks: {
          Evan: 497,
          Phil: 1179,
          Beauch: 263,
          Pete: 263,
        },
      },
      {
        at: "2024-07-20T05:14:51.446Z",
        stacks: {
          Evan: 477,
          Phil: 1279,
          Beauch: 243,
          Pete: 203,
        },
      },
      {
        at: "2024-07-20T05:16:06.643Z",
        stacks: {
          Evan: 477,
          Phil: 1381,
          Beauch: 223,
          Pete: 121,
        },
      },
      {
        at: "2024-07-20T05:16:52.498Z",
        stacks: {
          Evan: 497,
          Phil: 1381,
          Beauch: 223,
          Pete: 101,
        },
      },
      {
        at: "2024-07-20T05:17:27.032Z",
        stacks: {
          Evan: 487,
          Phil: 1391,
          Beauch: 223,
          Pete: 101,
        },
      },
      {
        at: "2024-07-20T05:18:23.961Z",
        stacks: {
          Evan: 487,
          Phil: 1371,
          Beauch: 243,
          Pete: 101,
        },
      },
      {
        at: "2024-07-20T05:19:57.816Z",
        stacks: {
          Evan: 467,
          Phil: 1290,
          Beauch: 233,
          Pete: 212,
        },
      },
      {
        at: "2024-07-20T05:21:51.029Z",
        stacks: {
          Evan: 427,
          Phil: 1450,
          Beauch: 153,
          Pete: 172,
        },
      },
      {
        at: "2024-07-20T05:23:00.662Z",
        stacks: {
          Evan: 417,
          Phil: 1430,
          Beauch: 153,
          Pete: 202,
        },
      },
      {
        at: "2024-07-20T05:23:51.899Z",
        stacks: {
          Evan: 397,
          Phil: 1490,
          Beauch: 133,
          Pete: 182,
        },
      },
      {
        at: "2024-07-20T05:24:34.460Z",
        stacks: {
          Evan: 397,
          Phil: 1520,
          Beauch: 123,
          Pete: 162,
        },
      },
      {
        at: "2024-07-20T05:25:38.115Z",
        stacks: {
          Evan: 457,
          Phil: 1500,
          Beauch: 123,
          Pete: 122,
        },
      },
      {
        at: "2024-07-20T05:26:27.414Z",
        stacks: {
          Evan: 447,
          Phil: 1530,
          Beauch: 123,
          Pete: 102,
        },
      },
      {
        at: "2024-07-20T05:27:36.692Z",
        stacks: {
          Evan: 507,
          Phil: 1510,
          Beauch: 103,
          Pete: 82,
        },
      },
      {
        at: "2024-07-20T05:28:11.759Z",
        stacks: {
          Evan: 537,
          Phil: 1510,
          Beauch: 93,
          Pete: 62,
        },
      },
      {
        at: "2024-07-20T05:29:10.624Z",
        stacks: {
          Evan: 599,
          Phil: 1510,
          Beauch: 93,
        },
      },
      {
        at: "2024-07-20T05:29:30.010Z",
        stacks: {
          Evan: 579,
          Phil: 1530,
          Beauch: 93,
        },
      },
      {
        at: "2024-07-20T05:29:50.656Z",
        stacks: {
          Evan: 579,
          Phil: 1570,
          Beauch: 53,
        },
      },
      {
        at: "2024-07-20T05:30:44.858Z",
        stacks: {
          Evan: 539,
          Phil: 1630,
          Beauch: 33,
        },
      },
      {
        at: "2024-07-20T05:30:59.270Z",
        stacks: {
          Evan: 519,
          Phil: 1650,
          Beauch: 33,
        },
      },
      {
        at: "2024-07-20T05:31:31.182Z",
        stacks: {
          Evan: 519,
          Phil: 1617,
          Beauch: 66,
        },
      },
      {
        at: "2024-07-20T05:32:15.879Z",
        stacks: {
          Evan: 625,
          Phil: 1577,
        },
      },
      {
        at: "2024-07-20T05:32:43.198Z",
        stacks: {
          Evan: 585,
          Phil: 1617,
        },
      },
      {
        at: "2024-07-20T05:33:23.275Z",
        stacks: {
          Evan: 865,
          Phil: 1337,
        },
      },
      {
        at: "2024-07-20T05:33:44.548Z",
        stacks: {
          Evan: 905,
          Phil: 1297,
        },
      },
      {
        at: "2024-07-20T05:34:19.496Z",
        stacks: {
          Evan: 825,
          Phil: 1377,
        },
      },
      {
        at: "2024-07-20T05:34:47.444Z",
        stacks: {
          Evan: 865,
          Phil: 1337,
        },
      },
      {
        at: "2024-07-20T05:35:00.725Z",
        stacks: {
          Evan: 905,
          Phil: 1297,
        },
      },
      {
        at: "2024-07-20T05:35:21.061Z",
        stacks: {
          Evan: 885,
          Phil: 1317,
        },
      },
      {
        at: "2024-07-20T05:36:12.241Z",
        stacks: {
          Evan: 1405,
          Phil: 797,
        },
      },
      {
        at: "2024-07-20T05:37:11.435Z",
        stacks: {
          Evan: 1805,
          Phil: 397,
        },
      },
      {
        at: "2024-07-20T05:37:19.341Z",
        stacks: {
          Evan: 1825,
          Phil: 377,
        },
      },
      {
        at: "2024-07-20T05:37:51.459Z",
        stacks: {
          Evan: 1865,
          Phil: 337,
        },
      },
      {
        at: "2024-07-20T05:38:16.959Z",
        stacks: {
          Evan: 1825,
          Phil: 377,
        },
      },
      {
        at: "2024-07-20T05:38:25.285Z",
        stacks: {
          Evan: 1805,
          Phil: 397,
        },
      },
      {
        at: "2024-07-20T05:39:41.886Z",
        stacks: {
          Evan: 2045,
          Phil: 157,
        },
      },
      {
        at: "2024-07-20T05:40:03.748Z",
        stacks: {
          Evan: 2025,
          Phil: 177,
        },
      },
      {
        at: "2024-07-20T05:40:38.107Z",
        stacks: {
          Evan: 1848,
          Phil: 354,
        },
      },
      {
        at: "2024-07-20T05:40:57.173Z",
        stacks: {
          Evan: 1888,
          Phil: 314,
        },
      },
      {
        at: "2024-07-20T05:41:53.648Z",
        stacks: {
          Evan: 1848,
          Phil: 354,
        },
      },
      {
        at: "2024-07-20T05:41:59.655Z",
        stacks: {
          Evan: 1828,
          Phil: 374,
        },
      },
      {
        at: "2024-07-20T05:42:49.703Z",
        stacks: {
          Evan: 1748,
          Phil: 454,
        },
      },
      {
        at: "2024-07-20T05:43:08.950Z",
        stacks: {
          Evan: 1708,
          Phil: 494,
        },
      },
    ],
    hands: 201,
    flops: 184,
    turns: 151,
    rivers: 125,
    allIns: 26,
    largestPots: [
      {
        name: "Evan",
        pot: 1040,
      },
      {
        name: "Evan",
        pot: 988,
      },
      {
        name: "Evan",
        pot: 800,
      },
      {
        name: "Evan",
        pot: 560,
      },
      {
        name: "Evan",
        pot: 480,
      },
      {
        name: "Evan",
        pot: 367,
      },
      {
        name: "Phil",
        pot: 354,
      },
      {
        name: "Phil",
        pot: 346,
      },
      {
        name: "Beauch",
        pot: 300,
      },
      {
        name: "Phil",
        pot: 300,
      },
    ],
    exits: [
      {
        name: "Phil",
        at: "2024-07-20T05:44:13.964Z",
      },
      {
        name: "Beauch",
        at: "2024-07-20T05:32:15.879Z",
      },
      {
        name: "Pete",
        at: "2024-07-20T05:29:10.624Z",
      },
      {
        name: "dethy",
        at: "2024-07-20T05:09:02.133Z",
      },
      {
        name: "Andrew",
        at: "2024-07-20T05:05:56.603Z",
      },
      {
        name: "Iain",
        at: "2024-07-20T05:05:56.603Z",
      },
      {
        name: "Robbie",
        at: "2024-07-20T04:30:57.586Z",
      },
      {
        name: "Jeremy",
        at: "2024-07-20T04:28:13.715Z",
      },
      {
        name: "Apples",
        at: "2024-07-20T03:50:41.091Z",
      },
      {
        name: "Alec",
        at: "2024-07-20T03:26:06.351Z",
      },
    ],
    potsWon: {
      Robbie: 14,
      Evan: 38,
      Jeremy: 17,
      Iain: 24,
      deth: 5,
      Andrew: 10,
      Alec: 10,
      Beauch: 17,
      Phil: 46,
      Pete: 22,
      Apples: 4,
      dethy: 3,
    },
    players: [
      "Pete",
      "Beauch",
      "Robbie",
      "Alec",
      "deth",
      "Jeremy",
      "Evan",
      "Iain",
      "Phil",
      "Apples",
      "Andrew",
      "dethy",
    ],
  },
  november: {
    stacks: [
      {
        at: "2024-11-24T03:02:12.969Z",
        stacks: {
          Beauch: 200,
          Alec: 200,
          Drew: 200,
          iain: 200,
          deth: 200,
          Phil: 200,
          JPo: 200,
        },
      },
      {
        at: "2024-11-24T03:04:25.730Z",
        stacks: {
          Beauch: 200,
          Alec: 194,
          Drew: 200,
          iain: 213,
          deth: 199,
          Phil: 194,
          JPo: 200,
          Pete: 200,
        },
      },
      {
        at: "2024-11-24T03:06:27.186Z",
        stacks: {
          Beauch: 198,
          Alec: 192,
          Drew: 198,
          iain: 213,
          deth: 199,
          Phil: 202,
          JPo: 198,
          Pete: 200,
        },
      },
      {
        at: "2024-11-24T03:08:49.080Z",
        stacks: {
          Beauch: 198,
          Alec: 245,
          Drew: 192,
          iain: 213,
          deth: 199,
          Phil: 162,
          JPo: 197,
          Pete: 194,
        },
      },
      {
        at: "2024-11-24T03:11:25.210Z",
        stacks: {
          Beauch: 196,
          Alec: 245,
          Drew: 199,
          iain: 213,
          deth: 195,
          Phil: 162,
          JPo: 197,
          Pete: 193,
        },
      },
      {
        at: "2024-11-24T03:13:46.015Z",
        stacks: {
          Beauch: 194,
          Alec: 241,
          Drew: 195,
          iain: 213,
          deth: 211,
          Phil: 160,
          JPo: 195,
          Pete: 191,
        },
      },
      {
        at: "2024-11-24T03:16:01.329Z",
        stacks: {
          Beauch: 194,
          Alec: 269,
          Drew: 193,
          iain: 213,
          deth: 189,
          Phil: 160,
          JPo: 195,
          Pete: 187,
        },
      },
      {
        at: "2024-11-24T03:18:30.402Z",
        stacks: {
          Beauch: 194,
          Alec: 265,
          Drew: 189,
          iain: 211,
          deth: 185,
          Phil: 160,
          JPo: 209,
          Pete: 187,
        },
      },
      {
        at: "2024-11-24T03:20:45.941Z",
        stacks: {
          Beauch: 194,
          Alec: 259,
          Drew: 204,
          iain: 210,
          deth: 183,
          Phil: 160,
          JPo: 209,
          Pete: 181,
        },
      },
      {
        at: "2024-11-24T03:23:50.409Z",
        stacks: {
          Beauch: 120,
          Alec: 255,
          Drew: 204,
          iain: 210,
          deth: 273,
          Phil: 150,
          JPo: 209,
          Pete: 179,
        },
      },
      {
        at: "2024-11-24T03:27:09.923Z",
        stacks: {
          Beauch: 116,
          Alec: 251,
          Drew: 200,
          iain: 210,
          deth: 269,
          Phil: 130,
          JPo: 245,
          Pete: 179,
        },
      },
      {
        at: "2024-11-24T03:30:19.889Z",
        stacks: {
          Beauch: 116,
          Alec: 237,
          Drew: 200,
          iain: 206,
          deth: 304,
          Phil: 126,
          JPo: 241,
          Pete: 170,
        },
      },
      {
        at: "2024-11-24T03:32:47.562Z",
        stacks: {
          Beauch: 114,
          Alec: 273,
          Drew: 200,
          iain: 202,
          deth: 304,
          Phil: 126,
          JPo: 237,
          Pete: 144,
        },
      },
      {
        at: "2024-11-24T03:35:42.264Z",
        stacks: {
          Beauch: 162,
          Alec: 257,
          Drew: 196,
          iain: 202,
          deth: 304,
          Phil: 122,
          JPo: 213,
          Pete: 144,
        },
      },
      {
        at: "2024-11-24T03:37:41.903Z",
        stacks: {
          Beauch: 162,
          Alec: 255,
          Drew: 197,
          iain: 203,
          deth: 304,
          Phil: 122,
          JPo: 213,
          Pete: 144,
        },
      },
      {
        at: "2024-11-24T03:40:35.819Z",
        stacks: {
          Beauch: 162,
          Alec: 223,
          Drew: 189,
          iain: 199,
          deth: 272,
          Phil: 198,
          JPo: 213,
          Pete: 144,
        },
      },
      {
        at: "2024-11-24T03:43:29.238Z",
        stacks: {
          Beauch: 162,
          Alec: 271,
          Drew: 189,
          iain: 195,
          deth: 268,
          Phil: 162,
          JPo: 213,
          Pete: 140,
        },
      },
      {
        at: "2024-11-24T03:46:15.635Z",
        stacks: {
          Beauch: 162,
          Alec: 271,
          Drew: 225,
          iain: 191,
          deth: 264,
          Phil: 154,
          JPo: 213,
          Pete: 120,
        },
      },
      {
        at: "2024-11-24T03:48:47.061Z",
        stacks: {
          Beauch: 162,
          Alec: 271,
          Drew: 253,
          iain: 175,
          deth: 264,
          Phil: 150,
          JPo: 209,
          Pete: 116,
        },
      },
      {
        at: "2024-11-24T03:51:44.732Z",
        stacks: {
          Alec: 295,
          Drew: 249,
          iain: 175,
          deth: 264,
          Phil: 146,
          JPo: 205,
          Pete: 108,
        },
      },
      {
        at: "2024-11-24T03:52:55.809Z",
        stacks: {
          Alec: 305,
          Drew: 249,
          iain: 175,
          deth: 264,
          Phil: 142,
          JPo: 201,
          Pete: 106,
        },
      },
      {
        at: "2024-11-24T03:54:55.758Z",
        stacks: {
          Beauch: 158,
          Alec: 301,
          Drew: 289,
          iain: 175,
          deth: 264,
          Phil: 142,
          JPo: 201,
          Pete: 70,
        },
      },
      {
        at: "2024-11-24T03:57:27.591Z",
        stacks: {
          Beauch: 152,
          Alec: 359,
          Drew: 257,
          iain: 171,
          deth: 260,
          Phil: 142,
          JPo: 189,
          Pete: 70,
        },
      },
      {
        at: "2024-11-24T04:00:53.000Z",
        stacks: {
          Beauch: 152,
          Alec: 351,
          Drew: 253,
          iain: 167,
          deth: 284,
          Phil: 134,
          JPo: 189,
          Pete: 70,
        },
      },
      {
        at: "2024-11-24T04:03:18.812Z",
        stacks: {
          Beauch: 152,
          Alec: 323,
          Drew: 249,
          iain: 163,
          deth: 280,
          Phil: 178,
          JPo: 189,
          Pete: 66,
        },
      },
      {
        at: "2024-11-24T04:05:39.830Z",
        stacks: {
          Beauch: 152,
          Alec: 335,
          Drew: 249,
          iain: 163,
          deth: 280,
          Phil: 172,
          JPo: 183,
          Pete: 66,
        },
      },
      {
        at: "2024-11-24T04:08:36.402Z",
        stacks: {
          Beauch: 152,
          Alec: 305,
          Drew: 249,
          iain: 163,
          deth: 274,
          Phil: 220,
          JPo: 177,
          Pete: 60,
        },
      },
      {
        at: "2024-11-24T04:11:20.301Z",
        stacks: {
          Beauch: 146,
          Alec: 293,
          Drew: 249,
          iain: 163,
          deth: 274,
          Phil: 298,
          JPo: 177,
        },
      },
      {
        at: "2024-11-24T04:13:24.727Z",
        stacks: {
          Beauch: 143,
          Alec: 281,
          Drew: 249,
          iain: 163,
          deth: 262,
          Phil: 298,
          JPo: 204,
        },
      },
      {
        at: "2024-11-24T04:15:58.671Z",
        stacks: {
          Beauch: 143,
          Alec: 278,
          Drew: 237,
          iain: 224,
          deth: 262,
          Phil: 264,
          JPo: 192,
        },
      },
      {
        at: "2024-11-24T04:18:27.571Z",
        stacks: {
          Beauch: 143,
          Alec: 278,
          Drew: 234,
          iain: 206,
          deth: 232,
          Phil: 315,
          JPo: 192,
        },
      },
      {
        at: "2024-11-24T04:19:50.964Z",
        stacks: {
          Beauch: 143,
          Alec: 278,
          Drew: 234,
          iain: 188,
          deth: 250,
          Phil: 315,
          JPo: 192,
        },
      },
      {
        at: "2024-11-24T04:22:03.997Z",
        stacks: {
          Beauch: 137,
          Alec: 278,
          Drew: 264,
          iain: 188,
          deth: 280,
          Phil: 309,
          JPo: 144,
        },
      },
      {
        at: "2024-11-24T04:25:03.501Z",
        stacks: {
          Alec: 278,
          Drew: 264,
          iain: 337,
          deth: 280,
          Phil: 303,
        },
      },
      {
        at: "2024-11-24T04:26:49.484Z",
        stacks: {
          Alec: 212,
          Drew: 264,
          iain: 337,
          deth: 346,
          Phil: 303,
          JPo: 138,
        },
      },
      {
        at: "2024-11-24T04:28:42.764Z",
        stacks: {
          Alec: 245,
          Drew: 258,
          iain: 337,
          deth: 334,
          Phil: 303,
          JPo: 123,
        },
      },
      {
        at: "2024-11-24T04:30:16.299Z",
        stacks: {
          Alec: 245,
          Drew: 252,
          iain: 331,
          deth: 334,
          Phil: 315,
          JPo: 123,
        },
      },
      {
        at: "2024-11-24T04:31:41.625Z",
        stacks: {
          Alec: 233,
          Drew: 252,
          iain: 328,
          deth: 355,
          Phil: 309,
          JPo: 123,
        },
      },
      {
        at: "2024-11-24T04:34:01.851Z",
        stacks: {
          Alec: 305,
          Drew: 252,
          iain: 328,
          deth: 343,
          Phil: 249,
          JPo: 123,
        },
      },
      {
        at: "2024-11-24T04:35:35.396Z",
        stacks: {
          Alec: 305,
          iain: 328,
          deth: 343,
          Phil: 209,
          JPo: 171,
        },
      },
      {
        at: "2024-11-24T04:37:09.724Z",
        stacks: {
          Alec: 289,
          iain: 328,
          deth: 391,
          Phil: 193,
          JPo: 155,
        },
      },
      {
        at: "2024-11-24T04:38:40.429Z",
        stacks: {
          Alec: 281,
          iain: 320,
          deth: 415,
          Phil: 185,
          JPo: 155,
        },
      },
      {
        at: "2024-11-24T04:39:46.363Z",
        stacks: {
          Alec: 281,
          iain: 316,
          deth: 417,
          Phil: 187,
          JPo: 155,
        },
      },
      {
        at: "2024-11-24T04:41:28.350Z",
        stacks: {
          Alec: 281,
          iain: 316,
          deth: 377,
          Phil: 147,
          JPo: 235,
        },
      },
      {
        at: "2024-11-24T04:42:21.173Z",
        stacks: {
          Alec: 265,
          iain: 316,
          deth: 377,
          Phil: 143,
          JPo: 255,
        },
      },
      {
        at: "2024-11-24T04:43:44.018Z",
        stacks: {
          Alec: 257,
          iain: 316,
          deth: 377,
          Phil: 143,
          JPo: 263,
        },
      },
      {
        at: "2024-11-24T04:45:33.339Z",
        stacks: {
          Alec: 265,
          iain: 308,
          deth: 377,
          Phil: 143,
          JPo: 263,
        },
      },
      {
        at: "2024-11-24T04:46:25.238Z",
        stacks: {
          Alec: 277,
          iain: 304,
          deth: 369,
          Phil: 143,
          JPo: 263,
        },
      },
      {
        at: "2024-11-24T04:48:22.906Z",
        stacks: {
          Alec: 277,
          iain: 304,
          deth: 361,
          Phil: 111,
          JPo: 303,
        },
      },
      {
        at: "2024-11-24T04:50:13.320Z",
        stacks: {
          Alec: 261,
          iain: 280,
          deth: 417,
          Phil: 103,
        },
      },
      {
        at: "2024-11-24T04:50:43.410Z",
        stacks: {
          Alec: 261,
          iain: 280,
          deth: 417,
          Phil: 103,
        },
      },
      {
        at: "2024-11-24T04:52:12.227Z",
        stacks: {
          Alec: 257,
          iain: 300,
          deth: 401,
          Phil: 103,
          JPo: 295,
        },
      },
      {
        at: "2024-11-24T04:53:35.061Z",
        stacks: {
          Alec: 285,
          iain: 292,
          deth: 393,
          Phil: 95,
          JPo: 291,
        },
      },
      {
        at: "2024-11-24T04:54:31.824Z",
        stacks: {
          Alec: 313,
          iain: 284,
          deth: 389,
          Phil: 87,
          JPo: 283,
        },
      },
      {
        at: "2024-11-24T04:56:12.198Z",
        stacks: {
          Alec: 225,
          iain: 388,
          deth: 389,
          Phil: 79,
          JPo: 275,
        },
      },
      {
        at: "2024-11-24T04:57:56.241Z",
        stacks: {
          Alec: 209,
          iain: 388,
          deth: 373,
          JPo: 386,
        },
      },
      {
        at: "2024-11-24T04:58:35.931Z",
        stacks: {
          Alec: 217,
          iain: 380,
          deth: 373,
          JPo: 386,
        },
      },
      {
        at: "2024-11-24T04:59:43.676Z",
        stacks: {
          Alec: 233,
          iain: 372,
          deth: 365,
          JPo: 386,
        },
      },
      {
        at: "2024-11-24T05:01:45.274Z",
        stacks: {
          Alec: 209,
          Drew: 244,
          iain: 364,
          deth: 421,
          JPo: 362,
        },
      },
      {
        at: "2024-11-24T05:03:31.183Z",
        stacks: {
          Alec: 253,
          Drew: 232,
          iain: 364,
          deth: 421,
          JPo: 330,
        },
      },
      {
        at: "2024-11-24T05:05:03.073Z",
        stacks: {
          Alec: 249,
          Drew: 208,
          iain: 408,
          deth: 405,
          JPo: 330,
        },
      },
      {
        at: "2024-11-24T05:06:58.480Z",
        stacks: {
          Alec: 249,
          Drew: 198,
          iain: 398,
          deth: 375,
          JPo: 380,
        },
      },
      {
        at: "2024-11-24T05:08:26.280Z",
        stacks: {
          Alec: 219,
          Drew: 248,
          iain: 388,
          deth: 365,
          JPo: 380,
        },
      },
      {
        at: "2024-11-24T05:09:43.783Z",
        stacks: {
          Alec: 219,
          Drew: 238,
          iain: 388,
          deth: 385,
          JPo: 370,
        },
      },
      {
        at: "2024-11-24T05:11:32.608Z",
        stacks: {
          Alec: 199,
          Drew: 188,
          iain: 463,
          deth: 385,
          JPo: 365,
        },
      },
      {
        at: "2024-11-24T05:12:48.455Z",
        stacks: {
          Alec: 249,
          Drew: 168,
          iain: 443,
          deth: 385,
          JPo: 355,
        },
      },
      {
        at: "2024-11-24T05:14:25.461Z",
        stacks: {
          Alec: 249,
          Drew: 238,
          iain: 433,
          deth: 325,
          JPo: 355,
        },
      },
      {
        at: "2024-11-24T05:16:04.948Z",
        stacks: {
          Alec: 269,
          Drew: 238,
          iain: 423,
          deth: 315,
          JPo: 355,
        },
      },
      {
        at: "2024-11-24T05:18:47.016Z",
        stacks: {
          Alec: 269,
          Drew: 188,
          iain: 838,
          deth: 305,
        },
      },
      {
        at: "2024-11-24T05:19:57.048Z",
        stacks: {
          Alec: 299,
          Drew: 178,
          iain: 818,
          deth: 305,
        },
      },
      {
        at: "2024-11-24T05:21:06.194Z",
        stacks: {
          Alec: 239,
          Drew: 238,
          iain: 818,
          deth: 305,
        },
      },
      {
        at: "2024-11-24T05:22:27.694Z",
        stacks: {
          Alec: 254,
          Drew: 233,
          iain: 808,
          deth: 305,
        },
      },
      {
        at: "2024-11-24T05:23:58.362Z",
        stacks: {
          Alec: 254,
          Drew: 223,
          iain: 1123,
        },
      },
      {
        at: "2024-11-24T05:24:30.879Z",
        stacks: {
          Alec: 264,
          Drew: 223,
          iain: 1113,
        },
      },
      {
        at: "2024-11-24T05:25:43.960Z",
        stacks: {
          Alec: 244,
          Drew: 466,
          iain: 890,
        },
      },
      {
        at: "2024-11-24T05:27:16.874Z",
        stacks: {
          Alec: 284,
          Drew: 436,
          iain: 880,
        },
      },
      {
        at: "2024-11-24T05:28:23.110Z",
        stacks: {
          Alec: 254,
          Drew: 476,
          iain: 870,
        },
      },
      {
        at: "2024-11-24T05:29:27.881Z",
        stacks: {
          Drew: 730,
          iain: 870,
        },
      },
      {
        at: "2024-11-24T05:30:31.159Z",
        stacks: {
          Drew: 740,
          iain: 860,
        },
      },
      {
        at: "2024-11-24T05:30:44.547Z",
        stacks: {
          Drew: 745,
          iain: 855,
        },
      },
      {
        at: "2024-11-24T05:31:36.503Z",
        stacks: {
          Drew: 705,
          iain: 895,
        },
      },
      {
        at: "2024-11-24T05:31:54.477Z",
        stacks: {
          Drew: 710,
          iain: 890,
        },
      },
      {
        at: "2024-11-24T05:32:51.801Z",
        stacks: {
          Drew: 740,
          iain: 860,
        },
      },
      {
        at: "2024-11-24T05:33:04.421Z",
        stacks: {
          Drew: 745,
          iain: 855,
        },
      },
      {
        at: "2024-11-24T05:33:31.249Z",
        stacks: {
          Drew: 755,
          iain: 845,
        },
      },
      {
        at: "2024-11-24T05:33:41.578Z",
        stacks: {
          Drew: 760,
          iain: 840,
        },
      },
      {
        at: "2024-11-24T05:34:42.080Z",
        stacks: {
          Drew: 720,
          iain: 880,
        },
      },
      {
        at: "2024-11-24T05:35:25.602Z",
        stacks: {
          Drew: 740,
          iain: 860,
        },
      },
      {
        at: "2024-11-24T05:36:26.118Z",
        stacks: {
          Drew: 760,
          iain: 840,
        },
      },
      {
        at: "2024-11-24T05:36:33.943Z",
        stacks: {
          Drew: 770,
          iain: 830,
        },
      },
      {
        at: "2024-11-24T05:37:01.591Z",
        stacks: {
          Drew: 750,
          iain: 850,
        },
      },
      {
        at: "2024-11-24T05:37:08.409Z",
        stacks: {
          Drew: 760,
          iain: 840,
        },
      },
      {
        at: "2024-11-24T05:37:14.092Z",
        stacks: {
          Drew: 750,
          iain: 850,
        },
      },
      {
        at: "2024-11-24T05:37:25.532Z",
        stacks: {
          Drew: 760,
          iain: 840,
        },
      },
      {
        at: "2024-11-24T05:37:44.819Z",
        stacks: {
          Drew: 780,
          iain: 820,
        },
      },
      {
        at: "2024-11-24T05:38:16.840Z",
        stacks: {
          Drew: 820,
          iain: 780,
        },
      },
      {
        at: "2024-11-24T05:38:35.007Z",
        stacks: {
          Drew: 840,
          iain: 760,
        },
      },
      {
        at: "2024-11-24T05:38:41.745Z",
        stacks: {
          Drew: 850,
          iain: 750,
        },
      },
      {
        at: "2024-11-24T05:39:17.709Z",
        stacks: {
          Drew: 870,
          iain: 730,
        },
      },
      {
        at: "2024-11-24T05:39:39.256Z",
        stacks: {
          Drew: 850,
          iain: 750,
        },
      },
      {
        at: "2024-11-24T05:40:17.222Z",
        stacks: {
          Drew: 830,
          iain: 770,
        },
      },
      {
        at: "2024-11-24T05:40:50.240Z",
        stacks: {
          Drew: 850,
          iain: 750,
        },
      },
      {
        at: "2024-11-24T05:41:18.807Z",
        stacks: {
          Drew: 870,
          iain: 730,
        },
      },
      {
        at: "2024-11-24T05:41:25.660Z",
        stacks: {
          Drew: 880,
          iain: 720,
        },
      },
      {
        at: "2024-11-24T05:41:34.375Z",
        stacks: {
          Drew: 870,
          iain: 730,
        },
      },
      {
        at: "2024-11-24T05:41:41.333Z",
        stacks: {
          Drew: 880,
          iain: 720,
        },
      },
      {
        at: "2024-11-24T05:41:49.465Z",
        stacks: {
          Drew: 870,
          iain: 730,
        },
      },
      {
        at: "2024-11-24T05:42:24.821Z",
        stacks: {
          Drew: 890,
          iain: 710,
        },
      },
    ],
    hands: 108,
    flops: 92,
    turns: 74,
    rivers: 60,
    allIns: 10,
    largestPots: [
      {
        name: "Drew",
        pot: 1420,
      },
      {
        name: "iain",
        pot: 770,
      },
      {
        name: "iain",
        pot: 620,
      },
      {
        name: "Drew",
        pot: 508,
      },
      {
        name: "Drew",
        pot: 466,
      },
      {
        name: "iain",
        pot: 286,
      },
      {
        name: "iain",
        pot: 192,
      },
      {
        name: "JPo",
        pot: 190,
      },
      {
        name: "deth",
        pot: 164,
      },
      {
        name: "Phil",
        pot: 138,
      },
    ],
    exits: [
      {
        name: "iain",
        at: "2024-11-24T05:43:40.612Z",
      },
      {
        name: "Alec",
        at: "2024-11-24T05:29:27.881Z",
      },
      {
        name: "deth",
        at: "2024-11-24T05:23:58.362Z",
      },
      {
        name: "JPo",
        at: "2024-11-24T05:18:47.016Z",
      },
      {
        name: "Phil",
        at: "2024-11-24T04:57:56.241Z",
      },
      {
        name: "Beauch",
        at: "2024-11-24T04:25:03.501Z",
      },
      {
        name: "Pete",
        at: "2024-11-24T04:11:20.301Z",
      },
    ],
    potsWon: {
      iain: 18,
      Phil: 8,
      Alec: 24,
      Drew: 36,
      deth: 14,
      JPo: 10,
      Beauch: 1,
    },
    players: ["JPo", "Phil", "deth", "iain", "Drew", "Alec", "Beauch", "Pete"],
  },
  december: {
    stacks: [
      {
        at: "2024-12-29T03:00:03.446Z",
        stacks: {
          deth: 200,
          Beauch: 200,
          JPo: 200,
          iain: 200,
          Robbie: 200,
          EF: 200,
        },
      },
      {
        at: "2024-12-29T03:01:32.361Z",
        stacks: {
          deth: 192,
          Beauch: 200,
          JPo: 198,
          iain: 198,
          Robbie: 220,
          EF: 192,
        },
      },
      {
        at: "2024-12-29T03:03:03.319Z",
        stacks: {
          deth: 190,
          Beauch: 200,
          JPo: 198,
          iain: 192,
          Robbie: 220,
          EF: 200,
        },
      },
      {
        at: "2024-12-29T03:04:34.672Z",
        stacks: {
          deth: 196,
          Beauch: 198,
          JPo: 196,
          iain: 192,
          Robbie: 218,
          EF: 200,
        },
      },
      {
        at: "2024-12-29T03:06:43.524Z",
        stacks: {
          deth: 244,
          Beauch: 194,
          JPo: 194,
          iain: 192,
          Robbie: 176,
          EF: 200,
        },
      },
      {
        at: "2024-12-29T03:08:16.101Z",
        stacks: {
          deth: 244,
          Beauch: 194,
          JPo: 198,
          iain: 190,
          Robbie: 174,
          EF: 200,
        },
      },
      {
        at: "2024-12-29T03:10:37.431Z",
        stacks: {
          deth: 240,
          Beauch: 194,
          JPo: 209,
          iain: 189,
          Robbie: 172,
          EF: 196,
        },
      },
      {
        at: "2024-12-29T03:11:52.472Z",
        stacks: {
          deth: 248,
          Beauch: 194,
          JPo: 207,
          iain: 189,
          Robbie: 168,
          EF: 194,
        },
      },
      {
        at: "2024-12-29T03:12:46.842Z",
        stacks: {
          deth: 246,
          Beauch: 194,
          JPo: 207,
          iain: 189,
          Robbie: 171,
          EF: 193,
        },
      },
      {
        at: "2024-12-29T03:14:34.986Z",
        stacks: {
          deth: 326,
          Beauch: 192,
          JPo: 207,
          iain: 189,
          Robbie: 171,
          EF: 115,
        },
      },
      {
        at: "2024-12-29T03:16:27.813Z",
        stacks: {
          deth: 316,
          Beauch: 191,
          JPo: 226,
          iain: 183,
          Robbie: 169,
          EF: 115,
        },
      },
      {
        at: "2024-12-29T03:18:16.963Z",
        stacks: {
          deth: 312,
          Beauch: 185,
          JPo: 222,
          iain: 201,
          Robbie: 165,
          EF: 115,
        },
      },
      {
        at: "2024-12-29T03:19:58.531Z",
        stacks: {
          deth: 312,
          Beauch: 185,
          JPo: 226,
          iain: 199,
          Robbie: 163,
          EF: 115,
        },
      },
      {
        at: "2024-12-29T03:20:56.730Z",
        stacks: {
          deth: 310,
          Beauch: 185,
          JPo: 224,
          iain: 199,
          Robbie: 169,
          EF: 113,
        },
      },
      {
        at: "2024-12-29T03:22:52.325Z",
        stacks: {
          deth: 316,
          Beauch: 185,
          JPo: 222,
          iain: 199,
          Robbie: 167,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:24:24.826Z",
        stacks: {
          deth: 333,
          Beauch: 183,
          JPo: 211,
          iain: 199,
          Robbie: 163,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:25:51.219Z",
        stacks: {
          deth: 331,
          Beauch: 181,
          JPo: 217,
          iain: 199,
          Robbie: 161,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:27:38.972Z",
        stacks: {
          deth: 331,
          Beauch: 181,
          JPo: 215,
          iain: 197,
          Robbie: 165,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:29:37.440Z",
        stacks: {
          deth: 325,
          Beauch: 181,
          JPo: 215,
          iain: 195,
          Robbie: 173,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:30:28.778Z",
        stacks: {
          deth: 323,
          Beauch: 181,
          JPo: 215,
          iain: 195,
          Robbie: 177,
          EF: 109,
        },
      },
      {
        at: "2024-12-29T03:31:52.539Z",
        stacks: {
          deth: 357,
          Beauch: 181,
          JPo: 215,
          iain: 195,
          Robbie: 145,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:32:30.492Z",
        stacks: {
          deth: 361,
          Beauch: 177,
          JPo: 215,
          iain: 195,
          Robbie: 145,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:34:09.181Z",
        stacks: {
          deth: 345,
          Beauch: 175,
          JPo: 211,
          iain: 217,
          Robbie: 145,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:36:27.149Z",
        stacks: {
          deth: 345,
          Beauch: 175,
          JPo: 215,
          iain: 213,
          Robbie: 145,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:37:51.198Z",
        stacks: {
          deth: 341,
          Beauch: 175,
          JPo: 211,
          iain: 200,
          Robbie: 166,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:40:22.934Z",
        stacks: {
          deth: 435,
          Beauch: 175,
          JPo: 167,
          iain: 156,
          Robbie: 164,
          EF: 103,
        },
      },
      {
        at: "2024-12-29T03:41:56.419Z",
        stacks: {
          deth: 403,
          Beauch: 175,
          JPo: 205,
          iain: 156,
          Robbie: 160,
          EF: 101,
        },
      },
      {
        at: "2024-12-29T03:43:32.258Z",
        stacks: {
          deth: 401,
          Beauch: 189,
          JPo: 205,
          iain: 156,
          Robbie: 148,
          EF: 101,
        },
      },
      {
        at: "2024-12-29T03:45:54.457Z",
        stacks: {
          deth: 397,
          Beauch: 185,
          JPo: 201,
          iain: 213,
          Robbie: 103,
          EF: 101,
        },
      },
      {
        at: "2024-12-29T03:47:09.528Z",
        stacks: {
          deth: 407,
          Beauch: 185,
          JPo: 199,
          iain: 209,
          Robbie: 99,
          EF: 101,
        },
      },
      {
        at: "2024-12-29T03:49:03.041Z",
        stacks: {
          deth: 403,
          Beauch: 185,
          JPo: 199,
          iain: 217,
          Robbie: 95,
          EF: 101,
        },
      },
      {
        at: "2024-12-29T03:50:26.860Z",
        stacks: {
          deth: 403,
          Beauch: 185,
          JPo: 199,
          iain: 217,
          Robbie: 83,
          EF: 113,
        },
      },
      {
        at: "2024-12-29T03:52:42.884Z",
        stacks: {
          deth: 391,
          Beauch: 185,
          JPo: 187,
          iain: 326,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:53:45.710Z",
        stacks: {
          deth: 395,
          Beauch: 181,
          JPo: 187,
          iain: 326,
          EF: 111,
        },
      },
      {
        at: "2024-12-29T03:54:40.499Z",
        stacks: {
          deth: 395,
          Beauch: 179,
          JPo: 193,
          iain: 326,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:56:36.675Z",
        stacks: {
          deth: 395,
          Beauch: 179,
          JPo: 197,
          iain: 322,
          EF: 107,
        },
      },
      {
        at: "2024-12-29T03:58:56.121Z",
        stacks: {
          deth: 387,
          Beauch: 179,
          JPo: 193,
          iain: 314,
          EF: 127,
        },
      },
      {
        at: "2024-12-29T03:59:11.688Z",
        stacks: {
          deth: 389,
          Beauch: 179,
          JPo: 193,
          iain: 314,
          EF: 125,
        },
      },
      {
        at: "2024-12-29T04:01:19.304Z",
        stacks: {
          deth: 427,
          Beauch: 175,
          JPo: 163,
          iain: 314,
          EF: 121,
        },
      },
      {
        at: "2024-12-29T04:03:39.898Z",
        stacks: {
          deth: 421,
          Beauch: 229,
          JPo: 115,
          iain: 314,
          EF: 121,
        },
      },
      {
        at: "2024-12-29T04:04:50.677Z",
        stacks: {
          deth: 433,
          Beauch: 229,
          JPo: 109,
          iain: 308,
          EF: 121,
        },
      },
      {
        at: "2024-12-29T04:06:30.433Z",
        stacks: {
          deth: 460,
          Beauch: 229,
          JPo: 109,
          iain: 305,
          EF: 97,
        },
      },
      {
        at: "2024-12-29T04:07:42.335Z",
        stacks: {
          deth: 454,
          Beauch: 223,
          JPo: 109,
          iain: 335,
          EF: 79,
        },
      },
      {
        at: "2024-12-29T04:08:54.282Z",
        stacks: {
          deth: 448,
          Beauch: 229,
          JPo: 109,
          iain: 335,
          EF: 79,
        },
      },
      {
        at: "2024-12-29T04:10:49.814Z",
        stacks: {
          deth: 405,
          Beauch: 226,
          JPo: 103,
          iain: 387,
          EF: 79,
        },
      },
      {
        at: "2024-12-29T04:11:36.414Z",
        stacks: {
          deth: 405,
          Beauch: 226,
          JPo: 109,
          iain: 381,
          EF: 79,
        },
      },
      {
        at: "2024-12-29T04:12:37.915Z",
        stacks: {
          deth: 414,
          Beauch: 226,
          JPo: 109,
          iain: 378,
          EF: 73,
        },
      },
      {
        at: "2024-12-29T04:14:22.757Z",
        stacks: {
          deth: 402,
          Beauch: 220,
          JPo: 109,
          iain: 378,
          EF: 91,
        },
      },
      {
        at: "2024-12-29T04:15:24.030Z",
        stacks: {
          deth: 414,
          Beauch: 214,
          JPo: 109,
          iain: 372,
          EF: 91,
        },
      },
      {
        at: "2024-12-29T04:17:10.920Z",
        stacks: {
          deth: 396,
          Beauch: 211,
          JPo: 91,
          iain: 411,
          EF: 91,
        },
      },
      {
        at: "2024-12-29T04:18:17.029Z",
        stacks: {
          deth: 390,
          Beauch: 211,
          JPo: 88,
          iain: 405,
          EF: 106,
        },
      },
      {
        at: "2024-12-29T04:19:43.917Z",
        stacks: {
          deth: 384,
          Beauch: 211,
          JPo: 106,
          iain: 399,
          EF: 100,
        },
      },
      {
        at: "2024-12-29T04:20:20.144Z",
        stacks: {
          deth: 390,
          Beauch: 211,
          JPo: 106,
          iain: 399,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T04:21:11.137Z",
        stacks: {
          deth: 396,
          Beauch: 205,
          JPo: 106,
          iain: 399,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T04:22:38.919Z",
        stacks: {
          deth: 381,
          Beauch: 202,
          JPo: 154,
          iain: 369,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T04:24:26.012Z",
        stacks: {
          deth: 381,
          Beauch: 196,
          JPo: 151,
          iain: 378,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T04:25:50.295Z",
        stacks: {
          deth: 348,
          Beauch: 196,
          JPo: 151,
          iain: 375,
          EF: 130,
        },
      },
      {
        at: "2024-12-29T04:27:35.395Z",
        stacks: {
          deth: 342,
          Beauch: 242,
          JPo: 151,
          iain: 355,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:28:36.924Z",
        stacks: {
          deth: 348,
          Beauch: 236,
          JPo: 151,
          iain: 355,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:30:51.665Z",
        stacks: {
          deth: 363,
          Beauch: 233,
          JPo: 145,
          iain: 349,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:32:26.171Z",
        stacks: {
          deth: 387,
          Beauch: 233,
          JPo: 133,
          iain: 337,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:33:27.106Z",
        stacks: {
          deth: 407,
          Beauch: 233,
          JPo: 133,
          iain: 333,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T04:34:56.876Z",
        stacks: {
          deth: 391,
          Beauch: 233,
          JPo: 133,
          iain: 333,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:36:39.820Z",
        stacks: {
          deth: 415,
          Beauch: 217,
          JPo: 133,
          iain: 325,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:38:08.811Z",
        stacks: {
          deth: 407,
          Beauch: 209,
          JPo: 149,
          iain: 325,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:39:50.136Z",
        stacks: {
          deth: 407,
          Beauch: 201,
          JPo: 141,
          iain: 341,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:41:35.554Z",
        stacks: {
          deth: 407,
          Beauch: 193,
          JPo: 141,
          iain: 333,
          EF: 126,
        },
      },
      {
        at: "2024-12-29T04:43:28.480Z",
        stacks: {
          deth: 431,
          Beauch: 193,
          JPo: 141,
          iain: 317,
          EF: 118,
        },
      },
      {
        at: "2024-12-29T04:44:43.268Z",
        stacks: {
          deth: 399,
          Beauch: 161,
          JPo: 205,
          iain: 317,
          EF: 118,
        },
      },
      {
        at: "2024-12-29T04:46:35.330Z",
        stacks: {
          deth: 383,
          Beauch: 157,
          JPo: 225,
          iain: 317,
          EF: 118,
        },
      },
      {
        at: "2024-12-29T04:47:26.563Z",
        stacks: {
          deth: 383,
          Beauch: 157,
          JPo: 233,
          iain: 309,
          EF: 118,
        },
      },
      {
        at: "2024-12-29T04:49:05.225Z",
        stacks: {
          deth: 417,
          Beauch: 157,
          JPo: 215,
          iain: 301,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T04:50:32.947Z",
        stacks: {
          deth: 491,
          Beauch: 157,
          JPo: 215,
          iain: 235,
          EF: 102,
        },
      },
      {
        at: "2024-12-29T04:51:39.968Z",
        stacks: {
          deth: 507,
          Beauch: 149,
          JPo: 207,
          iain: 235,
          EF: 102,
        },
      },
      {
        at: "2024-12-29T04:52:51.770Z",
        stacks: {
          deth: 523,
          Beauch: 141,
          JPo: 199,
          iain: 235,
          EF: 102,
        },
      },
      {
        at: "2024-12-29T04:53:59.444Z",
        stacks: {
          deth: 507,
          Beauch: 141,
          JPo: 223,
          iain: 227,
          EF: 102,
        },
      },
      {
        at: "2024-12-29T04:56:22.198Z",
        stacks: {
          deth: 539,
          Beauch: 141,
          JPo: 223,
          iain: 219,
          EF: 78,
        },
      },
      {
        at: "2024-12-29T04:57:55.109Z",
        stacks: {
          deth: 515,
          Beauch: 133,
          JPo: 215,
          iain: 219,
          EF: 118,
        },
      },
      {
        at: "2024-12-29T04:59:46.030Z",
        stacks: {
          deth: 555,
          Beauch: 125,
          JPo: 199,
          iain: 211,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T05:00:16.945Z",
        stacks: {
          deth: 555,
          Beauch: 121,
          JPo: 203,
          iain: 211,
          EF: 110,
        },
      },
      {
        at: "2024-12-29T05:02:01.285Z",
        stacks: {
          deth: 555,
          Beauch: 145,
          JPo: 195,
          iain: 203,
          EF: 102,
        },
      },
      {
        at: "2024-12-29T05:03:15.207Z",
        stacks: {
          deth: 535,
          Beauch: 145,
          JPo: 195,
          iain: 231,
          EF: 94,
        },
      },
      {
        at: "2024-12-29T05:04:10.617Z",
        stacks: {
          deth: 525,
          Beauch: 135,
          JPo: 225,
          iain: 231,
          EF: 84,
        },
      },
      {
        at: "2024-12-29T05:06:19.612Z",
        stacks: {
          deth: 575,
          Beauch: 125,
          JPo: 195,
          iain: 221,
          EF: 84,
        },
      },
      {
        at: "2024-12-29T05:07:00.950Z",
        stacks: {
          deth: 555,
          Beauch: 120,
          JPo: 185,
          iain: 256,
          EF: 84,
        },
      },
      {
        at: "2024-12-29T05:08:07.504Z",
        stacks: {
          deth: 555,
          Beauch: 120,
          JPo: 255,
          iain: 246,
          EF: 24,
        },
      },
      {
        at: "2024-12-29T05:09:28.812Z",
        stacks: {
          deth: 570,
          Beauch: 120,
          JPo: 270,
          iain: 226,
          EF: 14,
        },
      },
      {
        at: "2024-12-29T05:10:07.969Z",
        stacks: {
          deth: 584,
          Beauch: 120,
          JPo: 270,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:11:06.446Z",
        stacks: {
          deth: 574,
          Beauch: 130,
          JPo: 270,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:11:55.020Z",
        stacks: {
          deth: 589,
          Beauch: 125,
          JPo: 260,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:12:55.361Z",
        stacks: {
          deth: 619,
          Beauch: 115,
          JPo: 250,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:14:10.245Z",
        stacks: {
          deth: 609,
          Beauch: 115,
          JPo: 250,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:15:20.298Z",
        stacks: {
          deth: 604,
          Beauch: 105,
          JPo: 265,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:15:34.501Z",
        stacks: {
          deth: 604,
          Beauch: 100,
          JPo: 270,
          iain: 226,
        },
      },
      {
        at: "2024-12-29T05:16:15.591Z",
        stacks: {
          deth: 604,
          Beauch: 100,
          JPo: 280,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:16:45.395Z",
        stacks: {
          deth: 609,
          Beauch: 100,
          JPo: 280,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T05:18:41.012Z",
        stacks: {
          deth: 569,
          Beauch: 90,
          JPo: 240,
          iain: 301,
        },
      },
      {
        at: "2024-12-29T05:19:17.430Z",
        stacks: {
          deth: 569,
          Beauch: 85,
          JPo: 245,
          iain: 301,
        },
      },
      {
        at: "2024-12-29T05:21:11.764Z",
        stacks: {
          deth: 519,
          Beauch: 85,
          JPo: 305,
          iain: 291,
        },
      },
      {
        at: "2024-12-29T05:22:37.017Z",
        stacks: {
          deth: 509,
          Beauch: 85,
          JPo: 305,
          iain: 301,
        },
      },
      {
        at: "2024-12-29T05:23:46.929Z",
        stacks: {
          deth: 519,
          Beauch: 75,
          iain: 301,
        },
      },
      {
        at: "2024-12-29T05:24:27.282Z",
        stacks: {
          deth: 509,
          Beauch: 70,
          iain: 316,
        },
      },
      {
        at: "2024-12-29T05:25:40.971Z",
        stacks: {
          deth: 549,
          Beauch: 70,
          JPo: 305,
          iain: 276,
        },
      },
      {
        at: "2024-12-29T05:26:55.564Z",
        stacks: {
          deth: 544,
          Beauch: 40,
          JPo: 340,
          iain: 276,
        },
      },
      {
        at: "2024-12-29T05:27:59.277Z",
        stacks: {
          deth: 589,
          Beauch: 35,
          JPo: 330,
          iain: 246,
        },
      },
      {
        at: "2024-12-29T05:28:22.032Z",
        stacks: {
          deth: 589,
          Beauch: 35,
          JPo: 325,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T05:29:23.307Z",
        stacks: {
          deth: 579,
          Beauch: 35,
          JPo: 325,
          iain: 261,
        },
      },
      {
        at: "2024-12-29T05:30:34.076Z",
        stacks: {
          deth: 609,
          Beauch: 25,
          JPo: 315,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T05:31:38.063Z",
        stacks: {
          deth: 609,
          Beauch: 20,
          JPo: 360,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T05:32:18.648Z",
        stacks: {
          deth: 609,
          Beauch: 20,
          JPo: 350,
          iain: 221,
        },
      },
      {
        at: "2024-12-29T05:32:34.293Z",
        stacks: {
          deth: 614,
          Beauch: 20,
          JPo: 350,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:33:56.488Z",
        stacks: {
          deth: 604,
          Beauch: 30,
          JPo: 350,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:34:55.347Z",
        stacks: {
          deth: 584,
          Beauch: 20,
          JPo: 400,
          iain: 196,
        },
      },
      {
        at: "2024-12-29T05:36:13.518Z",
        stacks: {
          deth: 564,
          JPo: 380,
          iain: 256,
        },
      },
      {
        at: "2024-12-29T05:36:55.924Z",
        stacks: {
          deth: 544,
          JPo: 380,
          iain: 276,
        },
      },
      {
        at: "2024-12-29T05:37:40.554Z",
        stacks: {
          deth: 584,
          JPo: 360,
          iain: 256,
        },
      },
      {
        at: "2024-12-29T05:38:20.531Z",
        stacks: {
          deth: 624,
          JPo: 340,
          iain: 236,
        },
      },
      {
        at: "2024-12-29T05:39:35.852Z",
        stacks: {
          deth: 664,
          JPo: 320,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:40:27.244Z",
        stacks: {
          deth: 644,
          JPo: 340,
          iain: 216,
        },
      },
      {
        at: "2024-12-29T05:41:46.243Z",
        stacks: {
          deth: 624,
          JPo: 380,
          iain: 196,
        },
      },
      {
        at: "2024-12-29T05:42:02.411Z",
        stacks: {
          deth: 634,
          JPo: 380,
          iain: 186,
        },
      },
      {
        at: "2024-12-29T05:43:00.950Z",
        stacks: {
          deth: 654,
          JPo: 360,
          iain: 186,
        },
      },
      {
        at: "2024-12-29T05:43:49.413Z",
        stacks: {
          deth: 654,
          JPo: 380,
          iain: 166,
        },
      },
      {
        at: "2024-12-29T05:44:40.566Z",
        stacks: {
          deth: 634,
          JPo: 420,
          iain: 146,
        },
      },
      {
        at: "2024-12-29T05:46:16.289Z",
        stacks: {
          deth: 569,
          JPo: 400,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T05:46:57.056Z",
        stacks: {
          deth: 569,
          JPo: 380,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T05:47:20.657Z",
        stacks: {
          deth: 579,
          JPo: 380,
          iain: 241,
        },
      },
      {
        at: "2024-12-29T05:48:23.909Z",
        stacks: {
          deth: 559,
          JPo: 400,
          iain: 241,
        },
      },
      {
        at: "2024-12-29T05:50:19.219Z",
        stacks: {
          deth: 559,
          JPo: 480,
          iain: 161,
        },
      },
      {
        at: "2024-12-29T05:51:53.233Z",
        stacks: {
          deth: 519,
          JPo: 460,
          iain: 221,
        },
      },
      {
        at: "2024-12-29T05:52:34.277Z",
        stacks: {
          deth: 539,
          JPo: 440,
          iain: 221,
        },
      },
      {
        at: "2024-12-29T05:53:37.486Z",
        stacks: {
          deth: 519,
          JPo: 430,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T05:54:52.973Z",
        stacks: {
          deth: 559,
          JPo: 410,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T05:55:49.896Z",
        stacks: {
          deth: 619,
          JPo: 350,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T05:56:36.072Z",
        stacks: {
          deth: 659,
          JPo: 330,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T05:57:59.062Z",
        stacks: {
          deth: 639,
          JPo: 330,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T05:58:58.020Z",
        stacks: {
          deth: 619,
          JPo: 350,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T05:59:55.409Z",
        stacks: {
          deth: 579,
          JPo: 410,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T06:00:35.212Z",
        stacks: {
          deth: 559,
          JPo: 410,
          iain: 231,
        },
      },
      {
        at: "2024-12-29T06:01:30.118Z",
        stacks: {
          deth: 539,
          JPo: 390,
          iain: 271,
        },
      },
      {
        at: "2024-12-29T06:02:25.298Z",
        stacks: {
          deth: 609,
          JPo: 380,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T06:03:11.421Z",
        stacks: {
          deth: 629,
          JPo: 380,
          iain: 191,
        },
      },
      {
        at: "2024-12-29T06:03:54.063Z",
        stacks: {
          deth: 609,
          JPo: 400,
          iain: 191,
        },
      },
      {
        at: "2024-12-29T06:04:45.410Z",
        stacks: {
          deth: 589,
          JPo: 440,
          iain: 171,
        },
      },
      {
        at: "2024-12-29T06:05:27.224Z",
        stacks: {
          deth: 509,
          JPo: 440,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T06:05:45.664Z",
        stacks: {
          deth: 549,
          JPo: 400,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T06:06:08.219Z",
        stacks: {
          deth: 549,
          JPo: 440,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T06:06:57.786Z",
        stacks: {
          deth: 509,
          JPo: 440,
          iain: 251,
        },
      },
      {
        at: "2024-12-29T06:08:04.891Z",
        stacks: {
          deth: 309,
          JPo: 680,
          iain: 211,
        },
      },
      {
        at: "2024-12-29T06:09:14.927Z",
        stacks: {
          deth: 409,
          JPo: 660,
          iain: 131,
        },
      },
      {
        at: "2024-12-29T06:09:48.910Z",
        stacks: {
          deth: 369,
          JPo: 660,
          iain: 171,
        },
      },
      {
        at: "2024-12-29T06:10:27.021Z",
        stacks: {
          deth: 409,
          JPo: 620,
          iain: 171,
        },
      },
      {
        at: "2024-12-29T06:10:50.725Z",
        stacks: {
          deth: 409,
          JPo: 600,
          iain: 191,
        },
      },
      {
        at: "2024-12-29T06:11:40.874Z",
        stacks: {
          deth: 369,
          JPo: 680,
          iain: 151,
        },
      },
      {
        at: "2024-12-29T06:12:20.187Z",
        stacks: {
          deth: 329,
          JPo: 720,
          iain: 151,
        },
      },
      {
        at: "2024-12-29T06:13:12.142Z",
        stacks: {
          deth: 178,
          JPo: 680,
          iain: 342,
        },
      },
      {
        at: "2024-12-29T06:14:03.832Z",
        stacks: {
          deth: 138,
          JPo: 740,
          iain: 322,
        },
      },
      {
        at: "2024-12-29T06:14:15.384Z",
        stacks: {
          deth: 118,
          JPo: 760,
          iain: 322,
        },
      },
      {
        at: "2024-12-29T06:14:51.340Z",
        stacks: {
          deth: 118,
          JPo: 760,
          iain: 322,
        },
      },
      {
        at: "2024-12-29T06:15:36.459Z",
        stacks: {
          deth: 158,
          JPo: 760,
          iain: 282,
        },
      },
      {
        at: "2024-12-29T06:16:47.181Z",
        stacks: {
          deth: 118,
          JPo: 840,
          iain: 242,
        },
      },
      {
        at: "2024-12-29T06:17:36.605Z",
        stacks: {
          deth: 118,
          JPo: 760,
          iain: 322,
        },
      },
      {
        at: "2024-12-29T06:18:04.880Z",
        stacks: {
          deth: 78,
          JPo: 760,
          iain: 362,
        },
      },
      {
        at: "2024-12-29T06:18:25.104Z",
        stacks: {
          deth: 58,
          JPo: 720,
          iain: 422,
        },
      },
      {
        at: "2024-12-29T06:19:19.735Z",
        stacks: {
          deth: 58,
          JPo: 800,
          iain: 342,
        },
      },
      {
        at: "2024-12-29T06:20:23.288Z",
        stacks: {
          deth: 98,
          JPo: 800,
          iain: 302,
        },
      },
      {
        at: "2024-12-29T06:20:39.833Z",
        stacks: {
          deth: 78,
          JPo: 820,
          iain: 302,
        },
      },
      {
        at: "2024-12-29T06:21:27.626Z",
        stacks: {
          deth: 78,
          JPo: 780,
          iain: 342,
        },
      },
      {
        at: "2024-12-29T06:22:38.339Z",
        stacks: {
          deth: 196,
          JPo: 702,
          iain: 302,
        },
      },
      {
        at: "2024-12-29T06:23:41.307Z",
        stacks: {
          deth: 156,
          JPo: 662,
          iain: 382,
        },
      },
      {
        at: "2024-12-29T06:24:35.472Z",
        stacks: {
          deth: 156,
          JPo: 702,
          iain: 342,
        },
      },
      {
        at: "2024-12-29T06:25:04.837Z",
        stacks: {
          deth: 196,
          JPo: 702,
          iain: 302,
        },
      },
      {
        at: "2024-12-29T06:25:35.892Z",
        stacks: {
          deth: 236,
          JPo: 662,
          iain: 302,
        },
      },
      {
        at: "2024-12-29T06:26:16.367Z",
        stacks: {
          deth: 196,
          JPo: 742,
          iain: 262,
        },
      },
      {
        at: "2024-12-29T06:26:48.656Z",
        stacks: {
          deth: 276,
          JPo: 702,
          iain: 222,
        },
      },
      {
        at: "2024-12-29T06:27:27.930Z",
        stacks: {
          deth: 316,
          JPo: 662,
          iain: 222,
        },
      },
      {
        at: "2024-12-29T06:28:41.019Z",
        stacks: {
          deth: 396,
          JPo: 622,
          iain: 182,
        },
      },
      {
        at: "2024-12-29T06:29:07.599Z",
        stacks: {
          deth: 416,
          JPo: 622,
          iain: 162,
        },
      },
      {
        at: "2024-12-29T06:29:42.864Z",
        stacks: {
          deth: 456,
          JPo: 582,
          iain: 162,
        },
      },
      {
        at: "2024-12-29T06:30:37.294Z",
        stacks: {
          deth: 416,
          JPo: 542,
          iain: 242,
        },
      },
      {
        at: "2024-12-29T06:31:05.381Z",
        stacks: {
          deth: 456,
          JPo: 542,
          iain: 202,
        },
      },
      {
        at: "2024-12-29T06:32:01.861Z",
        stacks: {
          deth: 416,
          JPo: 582,
          iain: 202,
        },
      },
      {
        at: "2024-12-29T06:32:13.148Z",
        stacks: {
          deth: 416,
          JPo: 562,
          iain: 222,
        },
      },
      {
        at: "2024-12-29T06:32:48.060Z",
        stacks: {
          deth: 638,
          JPo: 562,
        },
      },
      {
        at: "2024-12-29T06:33:26.512Z",
        stacks: {
          deth: 678,
          JPo: 522,
        },
      },
      {
        at: "2024-12-29T06:34:37.126Z",
        stacks: {
          deth: 598,
          JPo: 602,
        },
      },
      {
        at: "2024-12-29T06:35:01.512Z",
        stacks: {
          deth: 638,
          JPo: 562,
        },
      },
      {
        at: "2024-12-29T06:35:26.083Z",
        stacks: {
          deth: 718,
          JPo: 482,
        },
      },
      {
        at: "2024-12-29T06:35:46.243Z",
        stacks: {
          deth: 798,
          JPo: 402,
        },
      },
      {
        at: "2024-12-29T06:36:42.487Z",
        stacks: {
          deth: 558,
          JPo: 642,
        },
      },
      {
        at: "2024-12-29T06:36:52.232Z",
        stacks: {
          deth: 518,
          JPo: 682,
        },
      },
      {
        at: "2024-12-29T06:37:03.849Z",
        stacks: {
          deth: 558,
          JPo: 642,
        },
      },
      {
        at: "2024-12-29T06:38:12.892Z",
        stacks: {
          deth: 798,
          JPo: 402,
        },
      },
      {
        at: "2024-12-29T06:38:19.331Z",
        stacks: {
          deth: 838,
          JPo: 362,
        },
      },
      {
        at: "2024-12-29T06:39:14.041Z",
        stacks: {
          deth: 758,
          JPo: 442,
        },
      },
      {
        at: "2024-12-29T06:39:30.002Z",
        stacks: {
          deth: 798,
          JPo: 402,
        },
      },
      {
        at: "2024-12-29T06:40:13.898Z",
        stacks: {
          deth: 638,
          JPo: 562,
        },
      },
      {
        at: "2024-12-29T06:40:23.120Z",
        stacks: {
          deth: 678,
          JPo: 522,
        },
      },
      {
        at: "2024-12-29T06:41:32.282Z",
        stacks: {
          deth: 438,
          JPo: 762,
        },
      },
      {
        at: "2024-12-29T06:41:51.124Z",
        stacks: {
          deth: 478,
          JPo: 722,
        },
      },
      {
        at: "2024-12-29T06:43:03.923Z",
        stacks: {
          deth: 238,
          JPo: 962,
        },
      },
    ],
    hands: 201,
    flops: 172,
    turns: 125,
    rivers: 97,
    allIns: 20,
    largestPots: [
      {
        name: "JPo",
        pot: 480,
      },
      {
        name: "deth",
        pot: 480,
      },
      {
        name: "JPo",
        pot: 480,
      },
      {
        name: "JPo",
        pot: 480,
      },
      {
        name: "JPo",
        pot: 476,
      },
      {
        name: "deth",
        pot: 444,
      },
      {
        name: "JPo",
        pot: 440,
      },
      {
        name: "iain",
        pot: 342,
      },
      {
        name: "JPo",
        pot: 320,
      },
      {
        name: "deth",
        pot: 196,
      },
    ],
    exits: [
      {
        name: "deth",
        at: "2024-12-29T06:43:51.580Z",
      },
      {
        name: "iain",
        at: "2024-12-29T06:32:48.060Z",
      },
      {
        name: "Beauch",
        at: "2024-12-29T05:36:13.518Z",
      },
      {
        name: "EF",
        at: "2024-12-29T05:10:07.969Z",
      },
      {
        name: "Robbie",
        at: "2024-12-29T03:52:42.884Z",
      },
    ],
    potsWon: {
      Robbie: 7,
      EF: 9,
      deth: 79,
      JPo: 60,
      iain: 41,
      Beauch: 7,
    },
    players: ["EF", "Robbie", "iain", "JPo", "Beauch", "deth"],
  },
  september: {
    stacks: [
      {
        at: "2024-09-21T02:10:43.037Z",
        stacks: {
          Robbie: 200,
          EF: 200,
          Beauch: 200,
          Alec: 200,
          Pete: 200,
          Coach: 200,
          Phil: 200,
          JPo: 200,
        },
      },
      {
        at: "2024-09-21T02:13:46.035Z",
        stacks: {
          Robbie: 246,
          EF: 200,
          Beauch: 198,
          Alec: 174,
          Pete: 184,
          Coach: 200,
          Phil: 200,
          JPo: 198,
        },
      },
      {
        at: "2024-09-21T02:16:34.345Z",
        stacks: {
          Robbie: 234,
          EF: 200,
          Beauch: 198,
          Alec: 174,
          Pete: 182,
          Coach: 198,
          Phil: 198,
          JPo: 216,
        },
      },
      {
        at: "2024-09-21T02:19:16.226Z",
        stacks: {
          Robbie: 234,
          EF: 200,
          Beauch: 196,
          Alec: 174,
          Pete: 180,
          Coach: 191,
          Phil: 191,
          JPo: 234,
        },
      },
      {
        at: "2024-09-21T02:22:26.436Z",
        stacks: {
          Robbie: 271,
          EF: 200,
          Beauch: 194,
          Alec: 172,
          Pete: 173,
          Coach: 189,
          Phil: 169,
          JPo: 232,
        },
      },
      {
        at: "2024-09-21T02:25:30.107Z",
        stacks: {
          Robbie: 269,
          EF: 249,
          Beauch: 194,
          Pete: 169,
          Coach: 189,
          Phil: 132,
          JPo: 230,
        },
      },
      {
        at: "2024-09-21T02:27:00.458Z",
        stacks: {
          Robbie: 273,
          EF: 247,
          Beauch: 192,
          Alec: 168,
          Pete: 169,
          Coach: 189,
          Phil: 132,
          JPo: 230,
        },
      },
      {
        at: "2024-09-21T02:29:43.096Z",
        stacks: {
          Robbie: 245,
          EF: 245,
          Beauch: 190,
          Alec: 166,
          Pete: 161,
          Coach: 187,
          Phil: 176,
          JPo: 230,
        },
      },
      {
        at: "2024-09-21T02:32:56.273Z",
        stacks: {
          Robbie: 245,
          EF: 245,
          Beauch: 189,
          Alec: 105,
          Pete: 100,
          Coach: 316,
          Phil: 176,
          JPo: 224,
        },
      },
      {
        at: "2024-09-21T02:34:17.846Z",
        stacks: {
          Robbie: 245,
          EF: 245,
          Beauch: 187,
          Alec: 103,
          Pete: 94,
          Coach: 316,
          Phil: 176,
          JPo: 234,
        },
      },
      {
        at: "2024-09-21T02:36:24.526Z",
        stacks: {
          Robbie: 273,
          EF: 245,
          Beauch: 187,
          Alec: 101,
          Pete: 92,
          Coach: 314,
          Phil: 154,
          JPo: 234,
        },
      },
      {
        at: "2024-09-21T02:38:27.616Z",
        stacks: {
          Robbie: 271,
          EF: 245,
          Beauch: 187,
          Alec: 101,
          Pete: 88,
          Coach: 326,
          Phil: 148,
          JPo: 234,
        },
      },
      {
        at: "2024-09-21T02:40:42.483Z",
        stacks: {
          Robbie: 271,
          EF: 243,
          Beauch: 145,
          Alec: 99,
          Pete: 88,
          Coach: 376,
          Phil: 146,
          JPo: 232,
        },
      },
      {
        at: "2024-09-21T02:43:10.561Z",
        stacks: {
          Robbie: 263,
          EF: 230,
          Beauch: 145,
          Alec: 99,
          Pete: 86,
          Coach: 413,
          Phil: 133,
          JPo: 231,
        },
      },
      {
        at: "2024-09-21T02:45:26.886Z",
        stacks: {
          Robbie: 251,
          EF: 341,
          Beauch: 145,
          Pete: 86,
          Coach: 413,
          Phil: 133,
          JPo: 231,
        },
      },
      {
        at: "2024-09-21T02:47:40.658Z",
        stacks: {
          Robbie: 251,
          EF: 357,
          Beauch: 141,
          Pete: 82,
          Coach: 413,
          Phil: 129,
          JPo: 227,
        },
      },
      {
        at: "2024-09-21T02:49:59.699Z",
        stacks: {
          Robbie: 247,
          EF: 379,
          Beauch: 139,
          Pete: 74,
          Coach: 413,
          Phil: 125,
          JPo: 223,
        },
      },
      {
        at: "2024-09-21T02:52:00.529Z",
        stacks: {
          Robbie: 243,
          EF: 379,
          Beauch: 151,
          Pete: 70,
          Coach: 409,
          Phil: 125,
          JPo: 223,
        },
      },
      {
        at: "2024-09-21T02:54:39.648Z",
        stacks: {
          Robbie: 231,
          EF: 379,
          Beauch: 114,
          Pete: 62,
          Coach: 372,
          Phil: 223,
          JPo: 219,
        },
      },
      {
        at: "2024-09-21T02:56:48.026Z",
        stacks: {
          Robbie: 227,
          EF: 379,
          Beauch: 114,
          Pete: 58,
          Coach: 368,
          Phil: 207,
          JPo: 247,
        },
      },
      {
        at: "2024-09-21T02:58:09.250Z",
        stacks: {
          Robbie: 223,
          EF: 375,
          Beauch: 114,
          Pete: 74,
          Coach: 368,
          Phil: 207,
          JPo: 239,
        },
      },
      {
        at: "2024-09-21T03:00:16.971Z",
        stacks: {
          Robbie: 263,
          EF: 371,
          Beauch: 114,
          Pete: 66,
          Coach: 368,
          Phil: 179,
          JPo: 239,
        },
      },
      {
        at: "2024-09-21T03:02:30.657Z",
        stacks: {
          Robbie: 197,
          EF: 369,
          Beauch: 110,
          Pete: 142,
          Coach: 368,
          Phil: 179,
          JPo: 235,
        },
      },
      {
        at: "2024-09-21T03:04:49.444Z",
        stacks: {
          Robbie: 193,
          EF: 369,
          Beauch: 108,
          Pete: 138,
          Coach: 364,
          Phil: 205,
          JPo: 223,
        },
      },
      {
        at: "2024-09-21T03:06:51.920Z",
        stacks: {
          Robbie: 205,
          EF: 369,
          Beauch: 104,
          Pete: 134,
          Coach: 360,
          Phil: 205,
          JPo: 223,
        },
      },
      {
        at: "2024-09-21T03:08:56.490Z",
        stacks: {
          Robbie: 223,
          EF: 369,
          Beauch: 104,
          Pete: 122,
          Coach: 358,
          Phil: 201,
          JPo: 223,
        },
      },
      {
        at: "2024-09-21T03:10:22.962Z",
        stacks: {
          Robbie: 223,
          EF: 403,
          Beauch: 80,
          Pete: 122,
          Coach: 358,
          Phil: 199,
          JPo: 215,
        },
      },
      {
        at: "2024-09-21T03:12:23.036Z",
        stacks: {
          Robbie: 207,
          EF: 399,
          Beauch: 72,
          Pete: 122,
          Coach: 354,
          Phil: 195,
          JPo: 251,
        },
      },
      {
        at: "2024-09-21T03:25:58.827Z",
        stacks: {
          Robbie: 203,
          EF: 347,
          Beauch: 72,
          Pete: 118,
          Coach: 430,
          Phil: 187,
          JPo: 243,
        },
      },
      {
        at: "2024-09-21T03:27:59.582Z",
        stacks: {
          Robbie: 131,
          EF: 341,
          Pete: 106,
          Coach: 424,
          Phil: 187,
          JPo: 411,
        },
      },
      {
        at: "2024-09-21T03:30:01.193Z",
        stacks: {
          Robbie: 131,
          EF: 329,
          Pete: 100,
          Coach: 412,
          Phil: 187,
          JPo: 441,
        },
      },
      {
        at: "2024-09-21T03:31:44.447Z",
        stacks: {
          Robbie: 119,
          EF: 311,
          Pete: 160,
          Coach: 394,
          Phil: 181,
          JPo: 435,
        },
      },
      {
        at: "2024-09-21T03:33:09.765Z",
        stacks: {
          Robbie: 113,
          EF: 311,
          Pete: 142,
          Coach: 388,
          Phil: 175,
          JPo: 471,
        },
      },
      {
        at: "2024-09-21T03:35:17.377Z",
        stacks: {
          Robbie: 101,
          EF: 299,
          Pete: 100,
          Coach: 388,
          Phil: 172,
          JPo: 540,
        },
      },
      {
        at: "2024-09-21T03:36:47.341Z",
        stacks: {
          Robbie: 89,
          EF: 299,
          Pete: 100,
          Coach: 484,
          Phil: 160,
          JPo: 468,
        },
      },
      {
        at: "2024-09-21T03:38:57.196Z",
        stacks: {
          Robbie: 83,
          EF: 415,
          Pete: 82,
          Coach: 398,
          Phil: 154,
          JPo: 468,
        },
      },
      {
        at: "2024-09-21T03:40:56.520Z",
        stacks: {
          Robbie: 77,
          EF: 397,
          Pete: 106,
          Coach: 398,
          Phil: 154,
          JPo: 468,
        },
      },
      {
        at: "2024-09-21T03:43:17.424Z",
        stacks: {
          Robbie: 77,
          EF: 337,
          Pete: 88,
          Coach: 392,
          Phil: 148,
          JPo: 558,
        },
      },
      {
        at: "2024-09-21T03:45:39.262Z",
        stacks: {
          Robbie: 77,
          EF: 337,
          Pete: 52,
          Coach: 326,
          Phil: 262,
          JPo: 546,
        },
      },
      {
        at: "2024-09-21T03:47:15.976Z",
        stacks: {
          Robbie: 39,
          EF: 331,
          Pete: 52,
          Coach: 326,
          Phil: 312,
          JPo: 540,
        },
      },
      {
        at: "2024-09-21T03:48:55.685Z",
        stacks: {
          Robbie: 33,
          EF: 259,
          Pete: 46,
          Coach: 326,
          Phil: 312,
          JPo: 624,
        },
      },
      {
        at: "2024-09-21T03:50:33.314Z",
        stacks: {
          Robbie: 30,
          EF: 253,
          Pete: 40,
          Coach: 347,
          Phil: 312,
          JPo: 618,
        },
      },
      {
        at: "2024-09-21T03:51:38.915Z",
        stacks: {
          Robbie: 30,
          EF: 250,
          Pete: 95,
          Coach: 341,
          Phil: 306,
          JPo: 578,
        },
      },
      {
        at: "2024-09-21T03:52:40.961Z",
        stacks: {
          Robbie: 30,
          EF: 250,
          Pete: 89,
          Coach: 335,
          Phil: 306,
          JPo: 590,
        },
      },
      {
        at: "2024-09-21T03:53:32.575Z",
        stacks: {
          Robbie: 24,
          EF: 250,
          Pete: 89,
          Coach: 347,
          Phil: 300,
          JPo: 590,
        },
      },
      {
        at: "2024-09-21T03:54:35.109Z",
        stacks: {
          Robbie: 18,
          EF: 250,
          Pete: 89,
          Coach: 347,
          Phil: 312,
          JPo: 584,
        },
      },
      {
        at: "2024-09-21T03:55:54.588Z",
        stacks: {
          Robbie: 12,
          EF: 250,
          Pete: 95,
          Coach: 347,
          Phil: 306,
          JPo: 590,
        },
      },
      {
        at: "2024-09-21T03:57:16.889Z",
        stacks: {
          EF: 268,
          Pete: 95,
          Coach: 347,
          Phil: 306,
          JPo: 584,
        },
      },
      {
        at: "2024-09-21T03:58:22.550Z",
        stacks: {
          EF: 260,
          Pete: 127,
          Coach: 339,
          Phil: 298,
          JPo: 576,
        },
      },
      {
        at: "2024-09-21T04:01:05.725Z",
        stacks: {
          EF: 428,
          Pete: 111,
          Coach: 323,
          Phil: 186,
          JPo: 552,
        },
      },
      {
        at: "2024-09-21T04:02:12.186Z",
        stacks: {
          EF: 448,
          Pete: 111,
          Coach: 319,
          Phil: 178,
          JPo: 544,
        },
      },
      {
        at: "2024-09-21T04:03:53.890Z",
        stacks: {
          EF: 488,
          Pete: 95,
          Coach: 311,
          Phil: 170,
          JPo: 536,
        },
      },
      {
        at: "2024-09-21T04:05:40.152Z",
        stacks: {
          EF: 564,
          Pete: 87,
          Coach: 247,
          Phil: 170,
          JPo: 532,
        },
      },
      {
        at: "2024-09-21T04:07:47.656Z",
        stacks: {
          EF: 556,
          Pete: 79,
          Coach: 207,
          Phil: 146,
          JPo: 612,
        },
      },
      {
        at: "2024-09-21T04:08:51.647Z",
        stacks: {
          EF: 556,
          Pete: 63,
          Coach: 199,
          Phil: 186,
          JPo: 596,
        },
      },
      {
        at: "2024-09-21T04:10:48.266Z",
        stacks: {
          EF: 548,
          Pete: 55,
          Coach: 247,
          Phil: 178,
          JPo: 572,
        },
      },
      {
        at: "2024-09-21T04:11:40.846Z",
        stacks: {
          EF: 548,
          Pete: 55,
          Coach: 247,
          Phil: 170,
          JPo: 580,
        },
      },
      {
        at: "2024-09-21T04:13:25.787Z",
        stacks: {
          EF: 493,
          Pete: 142,
          Coach: 247,
          Phil: 170,
          JPo: 548,
        },
      },
      {
        at: "2024-09-21T04:15:28.656Z",
        stacks: {
          EF: 581,
          Pete: 134,
          Coach: 231,
          Phil: 170,
          JPo: 484,
        },
      },
      {
        at: "2024-09-21T04:16:39.439Z",
        stacks: {
          EF: 581,
          Pete: 110,
          Coach: 215,
          Phil: 170,
          JPo: 524,
        },
      },
      {
        at: "2024-09-21T04:18:57.939Z",
        stacks: {
          EF: 573,
          Pete: 198,
          Coach: 167,
          Phil: 162,
          JPo: 500,
        },
      },
      {
        at: "2024-09-21T04:19:45.546Z",
        stacks: {
          EF: 573,
          Pete: 198,
          Coach: 167,
          Phil: 154,
          JPo: 508,
        },
      },
      {
        at: "2024-09-21T04:21:50.467Z",
        stacks: {
          EF: 565,
          Pete: 118,
          Coach: 167,
          Phil: 250,
          JPo: 500,
        },
      },
      {
        at: "2024-09-21T04:22:32.855Z",
        stacks: {
          EF: 561,
          Pete: 110,
          Coach: 167,
          Phil: 250,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:23:33.161Z",
        stacks: {
          EF: 561,
          Pete: 106,
          Coach: 159,
          Phil: 278,
          JPo: 496,
        },
      },
      {
        at: "2024-09-21T04:25:03.465Z",
        stacks: {
          EF: 571,
          Pete: 116,
          Coach: 155,
          Phil: 270,
          JPo: 488,
        },
      },
      {
        at: "2024-09-21T04:25:50.898Z",
        stacks: {
          EF: 571,
          Pete: 116,
          Coach: 155,
          Phil: 270,
          JPo: 488,
        },
      },
      {
        at: "2024-09-21T04:27:15.193Z",
        stacks: {
          EF: 539,
          Pete: 116,
          Coach: 155,
          Phil: 262,
          JPo: 528,
        },
      },
      {
        at: "2024-09-21T04:28:29.837Z",
        stacks: {
          EF: 535,
          Pete: 152,
          Coach: 155,
          Phil: 246,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:29:20.964Z",
        stacks: {
          EF: 535,
          Pete: 142,
          Coach: 145,
          Phil: 226,
          JPo: 552,
        },
      },
      {
        at: "2024-09-21T04:29:57.989Z",
        stacks: {
          EF: 535,
          Pete: 142,
          Coach: 140,
          Phil: 241,
          JPo: 542,
        },
      },
      {
        at: "2024-09-21T04:31:07.860Z",
        stacks: {
          EF: 535,
          Pete: 142,
          Coach: 140,
          Phil: 271,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:32:41.662Z",
        stacks: {
          EF: 560,
          Pete: 102,
          Coach: 140,
          Phil: 296,
          JPo: 502,
        },
      },
      {
        at: "2024-09-21T04:33:41.104Z",
        stacks: {
          EF: 550,
          Pete: 92,
          Coach: 140,
          Phil: 296,
          JPo: 522,
        },
      },
      {
        at: "2024-09-21T04:34:11.793Z",
        stacks: {
          EF: 550,
          Pete: 122,
          Coach: 130,
          Phil: 286,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:35:21.479Z",
        stacks: {
          EF: 550,
          Pete: 152,
          Coach: 120,
          Phil: 276,
          JPo: 502,
        },
      },
      {
        at: "2024-09-21T04:36:18.132Z",
        stacks: {
          EF: 550,
          Pete: 152,
          Coach: 120,
          Phil: 266,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:36:57.575Z",
        stacks: {
          EF: 540,
          Pete: 152,
          Coach: 120,
          Phil: 266,
          JPo: 522,
        },
      },
      {
        at: "2024-09-21T04:38:47.591Z",
        stacks: {
          EF: 535,
          Pete: 187,
          Coach: 120,
          Phil: 246,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:39:21.488Z",
        stacks: {
          EF: 535,
          Pete: 182,
          Coach: 110,
          Phil: 261,
          JPo: 512,
        },
      },
      {
        at: "2024-09-21T04:41:12.279Z",
        stacks: {
          EF: 535,
          Pete: 142,
          Coach: 170,
          Phil: 251,
          JPo: 502,
        },
      },
      {
        at: "2024-09-21T04:42:58.784Z",
        stacks: {
          EF: 535,
          Pete: 142,
          Coach: 170,
          Phil: 261,
          JPo: 492,
        },
      },
      {
        at: "2024-09-21T04:45:04.761Z",
        stacks: {
          EF: 515,
          Pete: 329,
          Coach: 28,
          Phil: 241,
          JPo: 487,
        },
      },
      {
        at: "2024-09-21T04:46:53.372Z",
        stacks: {
          EF: 505,
          Pete: 319,
          Coach: 28,
          Phil: 241,
          JPo: 507,
        },
      },
      {
        at: "2024-09-21T04:47:57.285Z",
        stacks: {
          EF: 530,
          Pete: 314,
          Coach: 18,
          Phil: 241,
          JPo: 497,
        },
      },
      {
        at: "2024-09-21T04:49:42.974Z",
        stacks: {
          EF: 482,
          Pete: 398,
          Phil: 223,
          JPo: 497,
        },
      },
      {
        at: "2024-09-21T04:49:58.640Z",
        stacks: {
          EF: 482,
          Pete: 398,
          Phil: 218,
          JPo: 502,
        },
      },
      {
        at: "2024-09-21T04:51:33.189Z",
        stacks: {
          EF: 472,
          Pete: 318,
          Phil: 178,
          JPo: 632,
        },
      },
      {
        at: "2024-09-21T04:51:59.564Z",
        stacks: {
          EF: 462,
          Pete: 328,
          Phil: 178,
          JPo: 632,
        },
      },
      {
        at: "2024-09-21T04:53:19.011Z",
        stacks: {
          EF: 452,
          Pete: 288,
          Phil: 248,
          JPo: 612,
        },
      },
      {
        at: "2024-09-21T04:54:28.660Z",
        stacks: {
          EF: 442,
          Pete: 338,
          Phil: 228,
          JPo: 592,
        },
      },
      {
        at: "2024-09-21T04:55:02.507Z",
        stacks: {
          EF: 432,
          Pete: 328,
          Phil: 228,
          JPo: 612,
        },
      },
      {
        at: "2024-09-21T04:56:02.527Z",
        stacks: {
          EF: 427,
          Pete: 298,
          Phil: 228,
          JPo: 647,
        },
      },
      {
        at: "2024-09-21T04:56:50.979Z",
        stacks: {
          EF: 427,
          Pete: 288,
          Phil: 238,
          JPo: 647,
        },
      },
      {
        at: "2024-09-21T04:57:50.647Z",
        stacks: {
          EF: 417,
          Pete: 288,
          Phil: 228,
          JPo: 667,
        },
      },
      {
        at: "2024-09-21T04:58:57.217Z",
        stacks: {
          EF: 397,
          Pete: 333,
          Phil: 208,
          JPo: 662,
        },
      },
      {
        at: "2024-09-21T05:08:41.962Z",
        stacks: {
          EF: 387,
          Pete: 363,
          Phil: 188,
          JPo: 662,
        },
      },
      {
        at: "2024-09-21T05:09:26.981Z",
        stacks: {
          EF: 387,
          Pete: 343,
          Phil: 228,
          JPo: 642,
        },
      },
      {
        at: "2024-09-21T05:10:57.578Z",
        stacks: {
          EF: 387,
          Pete: 243,
          Phil: 348,
          JPo: 622,
        },
      },
      {
        at: "2024-09-21T05:11:47.407Z",
        stacks: {
          EF: 367,
          Pete: 243,
          Phil: 348,
          JPo: 642,
        },
      },
      {
        at: "2024-09-21T05:12:24.242Z",
        stacks: {
          EF: 357,
          Pete: 293,
          Phil: 328,
          JPo: 622,
        },
      },
      {
        at: "2024-09-21T05:13:28.064Z",
        stacks: {
          EF: 337,
          Pete: 253,
          Phil: 308,
          JPo: 702,
        },
      },
      {
        at: "2024-09-21T05:13:52.808Z",
        stacks: {
          EF: 337,
          Pete: 233,
          Phil: 288,
          JPo: 742,
        },
      },
      {
        at: "2024-09-21T05:15:02.934Z",
        stacks: {
          EF: 457,
          Pete: 213,
          Phil: 248,
          JPo: 682,
        },
      },
      {
        at: "2024-09-21T05:15:31.621Z",
        stacks: {
          EF: 447,
          Pete: 243,
          Phil: 228,
          JPo: 682,
        },
      },
      {
        at: "2024-09-21T05:16:17.232Z",
        stacks: {
          EF: 447,
          Pete: 223,
          Phil: 248,
          JPo: 682,
        },
      },
      {
        at: "2024-09-21T05:17:09.573Z",
        stacks: {
          EF: 447,
          Pete: 163,
          Phil: 228,
          JPo: 762,
        },
      },
      {
        at: "2024-09-21T05:18:18.325Z",
        stacks: {
          EF: 427,
          Pete: 143,
          Phil: 288,
          JPo: 742,
        },
      },
      {
        at: "2024-09-21T05:19:04.012Z",
        stacks: {
          EF: 417,
          Pete: 173,
          Phil: 288,
          JPo: 722,
        },
      },
      {
        at: "2024-09-21T05:20:07.508Z",
        stacks: {
          EF: 417,
          Pete: 153,
          Phil: 248,
          JPo: 782,
        },
      },
      {
        at: "2024-09-21T05:20:41.414Z",
        stacks: {
          EF: 417,
          Pete: 153,
          Phil: 268,
          JPo: 762,
        },
      },
      {
        at: "2024-09-21T05:21:56.558Z",
        stacks: {
          EF: 397,
          Pete: 293,
          Phil: 208,
          JPo: 702,
        },
      },
      {
        at: "2024-09-21T05:22:53.366Z",
        stacks: {
          EF: 387,
          Pete: 273,
          Phil: 238,
          JPo: 702,
        },
      },
      {
        at: "2024-09-21T05:23:19.874Z",
        stacks: {
          EF: 387,
          Pete: 263,
          Phil: 218,
          JPo: 732,
        },
      },
      {
        at: "2024-09-21T05:24:03.845Z",
        stacks: {
          EF: 387,
          Pete: 263,
          Phil: 258,
          JPo: 692,
        },
      },
      {
        at: "2024-09-21T05:25:08.967Z",
        stacks: {
          EF: 507,
          Pete: 263,
          Phil: 258,
          JPo: 572,
        },
      },
      {
        at: "2024-09-21T05:26:57.654Z",
        stacks: {
          EF: 467,
          Phil: 138,
          JPo: 995,
        },
      },
      {
        at: "2024-09-21T05:27:55.982Z",
        stacks: {
          EF: 527,
          Phil: 118,
          JPo: 955,
        },
      },
      {
        at: "2024-09-21T05:28:30.326Z",
        stacks: {
          EF: 527,
          Phil: 78,
          JPo: 995,
        },
      },
      {
        at: "2024-09-21T05:29:14.913Z",
        stacks: {
          EF: 587,
          Phil: 78,
          JPo: 935,
        },
      },
      {
        at: "2024-09-21T05:29:53.797Z",
        stacks: {
          EF: 577,
          Phil: 128,
          JPo: 895,
        },
      },
      {
        at: "2024-09-21T05:30:08.026Z",
        stacks: {
          EF: 577,
          Phil: 148,
          JPo: 875,
        },
      },
      {
        at: "2024-09-21T05:30:57.047Z",
        stacks: {
          EF: 557,
          Phil: 188,
          JPo: 855,
        },
      },
      {
        at: "2024-09-21T05:31:08.224Z",
        stacks: {
          EF: 547,
          Phil: 198,
          JPo: 855,
        },
      },
      {
        at: "2024-09-21T05:31:44.040Z",
        stacks: {
          EF: 547,
          Phil: 178,
          JPo: 875,
        },
      },
      {
        at: "2024-09-21T05:31:58.784Z",
        stacks: {
          EF: 527,
          Phil: 178,
          JPo: 895,
        },
      },
      {
        at: "2024-09-21T05:32:09.875Z",
        stacks: {
          EF: 517,
          Phil: 188,
          JPo: 895,
        },
      },
      {
        at: "2024-09-21T05:32:44.273Z",
        stacks: {
          EF: 517,
          Phil: 168,
          JPo: 915,
        },
      },
      {
        at: "2024-09-21T05:33:35.696Z",
        stacks: {
          EF: 349,
          Phil: 376,
          JPo: 875,
        },
      },
      {
        at: "2024-09-21T05:33:51.179Z",
        stacks: {
          EF: 339,
          Phil: 386,
          JPo: 875,
        },
      },
      {
        at: "2024-09-21T05:34:29.017Z",
        stacks: {
          EF: 399,
          Phil: 346,
          JPo: 855,
        },
      },
      {
        at: "2024-09-21T05:35:26.300Z",
        stacks: {
          EF: 359,
          Phil: 396,
          JPo: 845,
        },
      },
      {
        at: "2024-09-21T05:35:52.867Z",
        stacks: {
          EF: 349,
          Phil: 426,
          JPo: 825,
        },
      },
      {
        at: "2024-09-21T05:36:12.663Z",
        stacks: {
          EF: 349,
          Phil: 446,
          JPo: 805,
        },
      },
      {
        at: "2024-09-21T05:36:54.885Z",
        stacks: {
          EF: 309,
          Phil: 446,
          JPo: 845,
        },
      },
      {
        at: "2024-09-21T05:38:25.183Z",
        stacks: {
          EF: 299,
          Phil: 451,
          JPo: 850,
        },
      },
      {
        at: "2024-09-21T05:38:36.147Z",
        stacks: {
          EF: 299,
          Phil: 431,
          JPo: 870,
        },
      },
      {
        at: "2024-09-21T05:39:00.804Z",
        stacks: {
          EF: 259,
          Phil: 491,
          JPo: 850,
        },
      },
      {
        at: "2024-09-21T05:39:21.251Z",
        stacks: {
          EF: 239,
          Phil: 451,
          JPo: 910,
        },
      },
      {
        at: "2024-09-21T05:39:43.610Z",
        stacks: {
          EF: 299,
          Phil: 431,
          JPo: 870,
        },
      },
      {
        at: "2024-09-21T05:40:01.287Z",
        stacks: {
          EF: 339,
          Phil: 431,
          JPo: 830,
        },
      },
      {
        at: "2024-09-21T05:40:19.602Z",
        stacks: {
          EF: 319,
          Phil: 451,
          JPo: 830,
        },
      },
      {
        at: "2024-09-21T05:40:43.668Z",
        stacks: {
          EF: 319,
          Phil: 411,
          JPo: 870,
        },
      },
      {
        at: "2024-09-21T05:41:26.178Z",
        stacks: {
          EF: 279,
          Phil: 571,
          JPo: 750,
        },
      },
      {
        at: "2024-09-21T05:41:42.653Z",
        stacks: {
          EF: 259,
          Phil: 591,
          JPo: 750,
        },
      },
      {
        at: "2024-09-21T05:42:07.244Z",
        stacks: {
          EF: 259,
          Phil: 631,
          JPo: 710,
        },
      },
      {
        at: "2024-09-21T05:43:10.612Z",
        stacks: {
          EF: 359,
          Phil: 551,
          JPo: 690,
        },
      },
      {
        at: "2024-09-21T05:43:51.072Z",
        stacks: {
          EF: 399,
          Phil: 511,
          JPo: 690,
        },
      },
      {
        at: "2024-09-21T05:44:18.194Z",
        stacks: {
          EF: 399,
          Phil: 471,
          JPo: 730,
        },
      },
      {
        at: "2024-09-21T05:45:31.799Z",
        stacks: {
          EF: 279,
          Phil: 611,
          JPo: 710,
        },
      },
      {
        at: "2024-09-21T05:45:46.216Z",
        stacks: {
          EF: 259,
          Phil: 631,
          JPo: 710,
        },
      },
      {
        at: "2024-09-21T05:46:31.461Z",
        stacks: {
          EF: 459,
          Phil: 471,
          JPo: 670,
        },
      },
      {
        at: "2024-09-21T05:46:49.780Z",
        stacks: {
          EF: 479,
          Phil: 471,
          JPo: 650,
        },
      },
      {
        at: "2024-09-21T05:47:32.908Z",
        stacks: {
          EF: 459,
          Phil: 431,
          JPo: 710,
        },
      },
      {
        at: "2024-09-21T05:47:45.054Z",
        stacks: {
          EF: 459,
          Phil: 411,
          JPo: 730,
        },
      },
      {
        at: "2024-09-21T05:48:27.740Z",
        stacks: {
          EF: 419,
          Phil: 471,
          JPo: 710,
        },
      },
      {
        at: "2024-09-21T05:49:32.178Z",
        stacks: {
          EF: 539,
          Phil: 431,
          JPo: 630,
        },
      },
      {
        at: "2024-09-21T05:50:17.740Z",
        stacks: {
          EF: 539,
          Phil: 391,
          JPo: 670,
        },
      },
      {
        at: "2024-09-21T05:50:54.890Z",
        stacks: {
          EF: 499,
          Phil: 311,
          JPo: 790,
        },
      },
      {
        at: "2024-09-21T05:51:08.199Z",
        stacks: {
          EF: 479,
          Phil: 271,
          JPo: 850,
        },
      },
      {
        at: "2024-09-21T05:51:48.451Z",
        stacks: {
          EF: 479,
          Phil: 311,
          JPo: 810,
        },
      },
      {
        at: "2024-09-21T05:52:46.946Z",
        stacks: {
          EF: 739,
          Phil: 71,
          JPo: 790,
        },
      },
      {
        at: "2024-09-21T05:53:04.519Z",
        stacks: {
          EF: 719,
          Phil: 91,
          JPo: 790,
        },
      },
      {
        at: "2024-09-21T05:53:21.188Z",
        stacks: {
          EF: 719,
          Phil: 71,
          JPo: 810,
        },
      },
      {
        at: "2024-09-21T05:53:41.735Z",
        stacks: {
          EF: 739,
          Phil: 71,
          JPo: 790,
        },
      },
      {
        at: "2024-09-21T05:54:20.398Z",
        stacks: {
          EF: 719,
          Phil: 162,
          JPo: 719,
        },
      },
      {
        at: "2024-09-21T05:54:39.727Z",
        stacks: {
          EF: 719,
          Phil: 202,
          JPo: 679,
        },
      },
      {
        at: "2024-09-21T05:55:05.593Z",
        stacks: {
          EF: 679,
          Phil: 262,
          JPo: 659,
        },
      },
      {
        at: "2024-09-21T05:55:33.430Z",
        stacks: {
          EF: 659,
          Phil: 282,
          JPo: 659,
        },
      },
      {
        at: "2024-09-21T05:56:06.601Z",
        stacks: {
          EF: 659,
          Phil: 262,
          JPo: 679,
        },
      },
      {
        at: "2024-09-21T05:56:31.977Z",
        stacks: {
          EF: 679,
          Phil: 262,
          JPo: 659,
        },
      },
      {
        at: "2024-09-21T05:57:18.167Z",
        stacks: {
          EF: 659,
          Phil: 322,
          JPo: 619,
        },
      },
      {
        at: "2024-09-21T05:58:11.347Z",
        stacks: {
          EF: 659,
          Phil: 362,
          JPo: 579,
        },
      },
      {
        at: "2024-09-21T05:58:20.243Z",
        stacks: {
          EF: 679,
          Phil: 362,
          JPo: 559,
        },
      },
      {
        at: "2024-09-21T05:58:43.321Z",
        stacks: {
          EF: 659,
          Phil: 382,
          JPo: 559,
        },
      },
      {
        at: "2024-09-21T05:59:20.950Z",
        stacks: {
          EF: 659,
          Phil: 342,
          JPo: 599,
        },
      },
      {
        at: "2024-09-21T06:01:28.101Z",
        stacks: {
          EF: 699,
          Phil: 342,
          JPo: 559,
        },
      },
      {
        at: "2024-09-21T06:02:04.348Z",
        stacks: {
          Phil: 362,
          JPo: 559,
        },
      },
    ],
    hands: 178,
    flops: 148,
    turns: 105,
    rivers: 77,
    allIns: 22,
    largestPots: [
      {
        name: "JPo",
        pot: 686,
      },
      {
        name: "EF",
        pot: 500,
      },
      {
        name: "Phil",
        pot: 376,
      },
      {
        name: "EF",
        pot: 360,
      },
      {
        name: "Pete",
        pot: 329,
      },
      {
        name: "EF",
        pot: 280,
      },
      {
        name: "Phil",
        pot: 280,
      },
      {
        name: "Phil",
        pot: 260,
      },
      {
        name: "JPo",
        pot: 240,
      },
      {
        name: "EF",
        pot: 240,
      },
    ],
    exits: [
      {
        name: "Pete",
        at: "2024-09-21T05:26:57.654Z",
      },
      {
        name: "Coach",
        at: "2024-09-21T04:49:42.974Z",
      },
      {
        name: "Robbie",
        at: "2024-09-21T03:57:16.889Z",
      },
      {
        name: "Beauch",
        at: "2024-09-21T03:27:59.582Z",
      },
      {
        name: "Alec",
        at: "2024-09-21T02:45:26.886Z",
      },
    ],
    potsWon: {
      Robbie: 7,
      JPo: 55,
      EF: 32,
      Phil: 53,
      Coach: 10,
      Beauch: 1,
      Pete: 25,
    },
    players: ["JPo", "Phil", "Coach", "Pete", "Alec", "Beauch", "EF", "Robbie"],
  },
};
