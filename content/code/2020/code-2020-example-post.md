---
title: 'Example Post of Code Section'
date: 2020-08-02T16:19:39+08:00
tags:
  - javascript
description: 'Grammar sugar is the ladder of productivity progress.'
image: '/images/2020/js-extends-note/header.webp'
---

> This article is machine translated by DeepL from [amzrk2.cc](https://amzrk2.cc/code/2020/js-extends-note/) and has no real meaning.

The following figure shows a simple classification of inheritance methods, focusing mainly on combined inheritance, parasitic combined inheritance and ES6 Class inheritance.

<!--more-->

![Simple classification chart of inheritance methods](/images/2020/js-extends-note/20200802162333.webp)

## Combinatorial inheritance

Combinatorial inheritance combines prototype chain inheritance and constructor inheritance, with subclass instances having separate instance properties (from constructor inheritance) and shared prototype methods (from prototype chain inheritance):

```js
function SuperClass(name) {
  this.name = name;
  this.friends = ['1', '2'];
}
SuperClass.prototype.printName = function () {
  console.log(this.name);
};
function SubClass(name, age) {
  SuperClass.call(this, name);
  this.age = age;
}
SubClass.prototype = new SuperClass(); // Pay attention here
SubClass.prototype.constructor = SubClass;
SubClass.prototype.printAge = function () {
  console.log(this.age);
};
const subInstance = new SubClass('aName', 18);
```

In the above example, the subclass instances have separate instance attributes `name`, `friends`, `age`, which share the prototype method `printName()` and `printAge()`. Since the prototype of the subclass is actually an instance of the parent class, there are redundant separate instance attributes `name` and `friends` created therein, which are overridden by the attribute of the same name generated by calling `call()` in the subclass instance constructor.

![Combinatorial inheritance example diagram](/images/2020/js-extends-note/20200802161333.webp)

## Parasitic combination inheritance

Combinatorial inheritance combined with parasitic inheritance transformed into parasitic combinatorial inheritance:

```js
function SuperClass(name) {
  this.name = name;
  this.friends = ['1', '2'];
}
SuperClass.prototype.printName = function () {
  console.log(this.name);
};
function SubClass(name, age) {
  SuperClass.call(this, name);
  this.age = age;
}
SubClass.prototype = Object.create(SuperClass.prototype); // discrepancy
SubClass.prototype.constructor = SubClass;
SubClass.prototype.printAge = function () {
  console.log(this.age);
};
const subInstance = new SubClass('aName', 18);
```

In the above example, the subclass instances also have separate instance attributes `name`, `friends`, `age`, and share the prototype method `printName()`, `printAge()`. The difference is that the subclass prototype is no longer an instance of the parent class, but a copy of the parent prototype, so there are no redundant separate instance attributes `name` and `friends`.

![Parasitic combination inheritance example diagram](/images/2020/js-extends-note/20200802161414.webp)

## ES6 class inheritance

The result of ES6 Class inheritance is basically similar to parasitic combination inheritance with a slightly different implementation:

```js
function SuperClass(name) {
  this.name = name;
  this.friends = ['1', '2'];
}
SuperClass.prototype.printName = function () {
  console.log(this.name);
};
function SubClass(name, age) {
  SuperClass.call(this, name);
  this.age = age;
}
SubClass.prototype = Object.create(SuperClass.prototype); // ????????????
SubClass.prototype.constructor = SubClass;
SubClass.prototype.printAge = function () {
  console.log(this.age);
};
const subInstance = new SubClass('aName', 18);
```

![ES6 class inheritance example diagram](/images/2020/js-extends-note/20200802161702.webp)
