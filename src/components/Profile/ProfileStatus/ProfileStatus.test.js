import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    
    test("span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE" />);
        const root = component.root;
        let p = root.findByType("p");
        expect(p.children[0]).toBe("SUBSCRIBE");
    })
});