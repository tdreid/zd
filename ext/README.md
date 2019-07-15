_This extension was cloned from boilerplate. Customize the README below._

# ZD_NEW_NEW_PAGE_TITLE

_Describe the new extension_ 

## Build
1. This repo includes the unpacked extension.  You should not need to build 
   unless you want to debug or change something.  If that's the case...
2. You'll need the dev dependencies so run `npm install`.
3. Use `npm run build` to transpile and minify changes in [src/main.js](src/main.js)
   to [ext/main.min.js](ext/main.min.js).  To transpile a more human readable 
   script for debugging you can use `npm run build-debug` instead.

## Installation — unpacked in developer mode
1. The the [/ext](ext/) folder contains the unpacked extension. Save the 
   contents of this folder locally to a place they will remain while in use.
2. From Chrome's menu select **More tools** > **Extensions** or browse to:
   `chrome://extensions`.
3. Enable **Developer mode** via the switch at upper-right.
4. Click on **Load unpacked**.
5. Select the local folder containing Interest Integrator and click **OK**.
6. In Chrome click on the icon to open the extension in a new tab.

__TIP__: [Extensions Reloader](https://github.com/arikw/chrome-extensions-reloader) is very handy when tinkering with unpacked extensions.

## MIT License

Copyright (c) 2019 Trevor Reid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
