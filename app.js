//import by itself fails
//use `var express = require("express");` as a workaround per here: https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import
//but didn't work... oh well...

var express = require("express");

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));

console.log("running node application, congrats");

range(2,2);

console.log("end.");
