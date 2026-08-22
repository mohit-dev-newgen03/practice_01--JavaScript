Hello developer's, 😄👋 in this specific folder i will cover those topics which are basics and don't requires their own folder. 

**Data types ( All the basics)**  😉👍


**Task 1 : Primitive methods** 

*Methods of Primitives*

Explored how primitives (like strings) can call methods even though
they aren't objects — JS silently wraps them in a temporary object for
each method call, then destroys it. Proved this by trying to attach a
custom property to a string and watching it vanish instantly.

Also confirmed `.toFixed()` returns a string (not a number) since it's
a display-formatting method, and re-verified string immutability:
methods like `.toUpperCase()` return a new string rather than modifying
the original.