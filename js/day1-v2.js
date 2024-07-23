    <script>
      function add(a, b) {
        console.log(a + b);
      }
      console.log(name);
      // Symbol, BigInt
      const id = 1; // Number
      var name = "Ujjwal"; // String
      var rollNo = "12"; // number
      const hasPaidFee = true; // Boolean (true or false)
      const courses = []; // Array
      let fatherName = null; // null
      let motherName; // undefined
      const salary = 1111111111111111111111111111111111111111111111n; // bigin
      const otherInformation = {};

      // const result = name * rollNo; // nan * 12
      // console.log(result)

      // console.log(typeof id);
      // console.log(typeof name);
      // console.log(typeof fatherName)
      // console.log(typeof add)
      // const roll = Number(rollNo)
      // Type Conversion
      // console.log(Number(id));
      // console.log(Number(rollNo));
      // console.log(Number(name));
      // console.log(Number(name));
      // console.log(Number(fatherName));
      // console.log(Number(motherName));

      // 0, "", null, undefined, NaN
      // console.log(Number("   0   "));

      // +, -, / , * , %, **
      const greet = "hellooo";
      const greetings = greet + " " + name; // template literal
      console.log(greetings);
      const sum = 2 - 2 - "3";

      let count = 0;
      const result = ++count;
      // post
      // result = 0, count = count + 1 ( count = 1)
      // pre
      // count = count + 1 ( count = 1) , result = count (1)
      console.log({ result, count });
      
    </script>