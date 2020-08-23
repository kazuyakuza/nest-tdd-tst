import chance = require("chance");
export const _utils = {
  rnd: new chance(),
  obj: {
    to: {
      JSON: {
        formatted: (obj) => JSON.stringify(obj, null, '\t'),
      },
    },
  },
}
