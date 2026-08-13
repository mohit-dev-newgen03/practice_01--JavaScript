This will be my first folder for JavaScript practice, here i will solve some fundamental, basics, and important question's, with variables and operators also cover the data type section. 

All the practice questions with good explanations of them are available in this folders main js file.

Thank you 🙇‍♂️


**- Task one 1 : Variables + Type Conversion**

Practiced type conversion using unary (+) operator on string inputs (order total & discount coupon), calculated percentage-based discount logic for a checkout scenario. Reinforced: + does NOT always mean addition, and only -, *, / force numeric conversion automatically.


**- Task two 2 : typeof operator behavior**

Task 2: Explored typeof behavior across number, null, and undefined for a delivery-app validation scenario. Confirmed and explained the classic typeof null === "object" bug — a legacy JS quirk kept for backward compatibility, not a "real" object type.


**- Task three 3 : null vs 0 comparison inconsistency**

Task 3: Explored the classic null vs 0 comparison inconsistency in JS. Learned that == treats null as special-cased and only loosely equal to undefined, while relational operators (>=) convert null to 0 numerically — same value, two different rule systems.


**- Task four 4 : Compared || vs ?? for a display-name fallback scenario**

Task 4: Compared || vs ?? for a display-name fallback scenario. Confirmed || treats any falsy value (including intentional empty strings) as "missing" and overrides it, while ?? only triggers on null/undefined — explains why ?? was added to JS to fix this exact class of business logic bug.


**- Task five 5 : Built a single-expression loyalty points calculator using ternary + type conversion**

Task 5: Built a single-expression loyalty points calculator using ternary + type conversion, ensuring string-to-number conversion happens before arithmetic in both branches to avoid string concatenation bugs. Reinforced operator precedence awareness in combined expressions.


**- Task six 6 : Built an input sanitizer for a bank transfer form using isNaN() instead of truthy/falsy checks**


Task 6: Built an input sanitizer for a bank transfer form using isNaN() instead of truthy/falsy checks. Learned why falsy checks (!Number(value)) are unreliable for validation — they wrongly flag legitimate values like "0" as invalid. Also added a positive-amount business rule as an edge case extension.