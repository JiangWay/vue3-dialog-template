import { ref as _, openBlock as l, createElementBlock as a, toDisplayString as u, createElementVNode as s, withDirectives as p, vShow as i } from "vue";
const r = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, d = {
  __name: "HelloWorld",
  setup(t) {
    const e = _(0), o = () => {
      e.value++;
    };
    return (n, c) => (l(), a("button", {
      type: "button",
      onClick: o
    }, "count is " + u(e.value), 1));
  }
}, g = /* @__PURE__ */ r(d, [["__scopeId", "data-v-4a27bb39"]]);
const v = { class: "blackBg" }, y = {
  __name: "MyButton",
  setup(t) {
    const e = _(!1), o = () => {
      console.log("isOpen"), e.value = !0;
    }, n = () => {
      e.value = !1;
    };
    return (c, b) => (l(), a("section", null, [
      s("button", { onClick: o }, "open"),
      p(s("div", v, [
        s("button", {
          onClick: n,
          class: "close"
        }, "Ｘ")
      ], 512), [
        [i, e.value]
      ])
    ]));
  }
}, m = /* @__PURE__ */ r(y, [["__scopeId", "data-v-23979931"]]);
export {
  g as HelloWord,
  m as MyButton
};
