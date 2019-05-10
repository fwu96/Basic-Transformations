# README file for Workbook (Assignment) 3

It is the student's responsibility to fill this in.
See <https://graphics.cs.wisc.edu/WP/cs559-sp2019/workbooks/#README_files>

## please answer these first three required questions "inline" (as in the instructions)

Name: Feifan Wu

WiscID: fwu62

GitHub Login: fwu96

## please answer these next (optional) questions on a line following the questions 

Attributions:

Parts of the Assignment you did (or did not) do:

Did you do any bonus parts?

Notes to the Grader:
- For the page6 practice, I implement the assignment similar with the sample professor given (with totally different code) currently. 
    - For now, the copter on the left automatically rotates around its own focus center; for the copter on the right, it should be stopped at the beginning, and be controlled by the slider below the box. 
    - For both copters, each of them have four propellers which are implement by quadratic bezier curve, and a `flip` function including `translate` and `scale` to do symmetric to make four legs of copter and four propellers as well.
    - Each propeller rotates around each own center, which I make it as a little circle. The front side of the copter have two propellers which rotate faster than the backside.

- For the paga7, I make a similar shape which I did for workbook2 but by a different way:
    - Here, due to the requirement of the assignment, I first did just half of the shape using `<g>`, which include the main shape body and the blank part at the center (so this `<g>` includes two shape).
    - Then I use `<use>` to use that group, to draw the symmetric part of that shape to make it as a complete shape.

- I will add more features on both page6 and page7 through the weekends.

---

Updates:
- I add some more shapes and features, also some changes on paga7 svg
    - Use `<defs>` for the shapes before I going to draw them
    - In order to have a good practice of hierarchies, I did this for both `diamonds` and `symbols` in each own hierarchies, which should be at the end of my code

- Add some features on page6
    - First time when finishing loading the window, there should be two copters in the box
        - The copter on the left rotate automatically with a fixed center and fixed speed
        - The copter on the right does not move at beginning. Then the speed slider under the box will control the speed. Once the slider value is not 0, this copter begins to rotate

    - There are two buttons under the slider
        - When click `Launch`, it changes to `launch mode`, there will be a copter launched from a random position, and the size of copter change from small to its original size (like when watching from the top)
        - When click `Auto`, it changes back to `auto mode`, which should be the same as the very beginning of the window that there are two copters

