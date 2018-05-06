// taken from https://github.com/calvinmetcalf/rollup-plugin-node-globals/blob/master/src/global.js

export default typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}
