import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";


describe("Paginator Component tests", () => {

  test("pages count equals 11 but should be equaled as 10", () => {
    const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    let spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });

  test("Display next button if the amount of pages more than 10 ", () => {
    const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    let button = root.findAllByType("button");
    expect(button.length).toBe(1);
  });
});