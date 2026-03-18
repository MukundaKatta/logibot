import { describe, it, expect } from "vitest";
import { Logibot } from "../src/core.js";
describe("Logibot", () => {
  it("init", () => { expect(new Logibot().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Logibot(); await c.manage(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Logibot(); await c.manage(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
