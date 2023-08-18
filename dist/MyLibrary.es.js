import { ref as a, openBlock as s, createElementBlock as n, toDisplayString as r, createElementVNode as d } from "vue";
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, _] of e)
    o[c] = _;
  return o;
}, p = {
  __name: "HelloWorld",
  setup(t) {
    const e = a(0), o = () => {
      e.value++;
    };
    return (c, _) => (s(), n("button", {
      type: "button",
      onClick: o
    }, "count is " + r(e.value), 1));
  }
}, v = /* @__PURE__ */ l(p, [["__scopeId", "data-v-4a27bb39"]]);
const u = { class: "black-bg" }, i = {
  __name: "MyBackground",
  props: ["isOpen"],
  emits: "close",
  setup(t, { emit: e }) {
    const o = () => {
      e("close", !1);
    };
    return (c, _) => (s(), n("div", u, [
      d("button", {
        onClick: o,
        class: "close"
      }, "Ｘ")
    ]));
  }
}, m = /* @__PURE__ */ l(i, [["__scopeId", "data-v-4d5b9b99"]]);
export {
  v as HelloWord,
  m as MyBackground
};
