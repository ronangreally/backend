//https://www.valentinog.com/blog/testing-react
import React from 'react';
import Button from '../components/button';
import renderer from 'react-test-renderer'; //rendering React components to pure JavaScript objects

//SNAPSHOT TESTING
//As you may guess snapshot tests are good for components that don't change often. 
//Put it another way: write a snapshot test when the component is stable.
    describe("Button component", () => {
        test("Matches the snapshot", () => {
          const button = renderer.create(<Button />); //create is a method from react-test-renderer for "mounting" the component
          expect(button.toJSON()).toMatchSnapshot(); //toMatchSnapshot() - creates a snapshot of the component if there isn’t any & checks if the component matches the saved snapshot
        });

    });
