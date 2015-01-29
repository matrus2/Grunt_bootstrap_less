Grunt_bootstrap_less
====================
With this package you can start frontend project based on Bootstrap. <br>
1. Simply clone this repository. <br>
    - (In NetBeans Team->Git->Clone)<br>
    - (New HTML5 Project from existing source)<br>
2. Update bower dependencies.<br>
    - (Go to the project location with command line)<br>
    - (Type 'bower update -f'   http://bower.io/docs/api/)<br>
3. Update npn dependencies.<br>
    - (Type 'npm-check-updates -u')<br>
4. Tape 'grunt' in command line.<br>

Folders /js and /less contain source files you should work with. Grunt watches changes and saves it to public folder. 


In case of a grunt error (no flatten method):
<br>
    Delete the node_modules folder<br>
    Do npm cache clean<br>
    Do npm install<br><br>
In case of Netbeans error (project in memory):
<br>
    Delete nbproject folders.<br>
    <br>
In case of Grunt Uglify error:
<br>
Change order of proper files in gruntfile.js    
<br>
In case of watch error do:<br>
npm install grunt-contrib-watch --save-dev
<br>
TODO:<br>
- move glyphicons font to public directory
<br>
<br>
<br>
<br>
You may want to use:<br>
<br>
http://fittextjs.com/
<br>
http://fitvidsjs.com/
<br>
<b>LESSHAT</b>
https://raw.githubusercontent.com/madebysource/lesshat/master/build/lesshat.less<br>
https://github.com/madebysource/lesshat/tree/master/mixins
