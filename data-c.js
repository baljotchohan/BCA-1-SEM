const SUBJECT_C = {
  id: "c-programming",
  code: "BCA-DSC-2(Maj)-102A",
  title: "Problem Solving Using C",
  type: "Major Core",
  credits: 4,
  theoryHours: 30,
  practicalHours: 30,
  assessment: { internal: 5, external: 45, practical: 50, total: 100 },
  icon: "fa-terminal",
  bgClass: "bg-blue",
  description: "Rigorous foundation in procedural programming. Covers memory management, pointer arithmetic, bitwise operations, file I/O, and algorithmic design for embedded systems and high-performance computing.",
  tags: ["Pointers", "Memory Management", "Algorithms", "Structs", "File I/O", "Bitwise"],
  units: [
    {
      unitNumber: "Unit I",
      title: "C Fundamentals & Control Structures",
      topics: [
        "1. History of C, GCC Compilation Pipeline, Memory Layout (Stack vs Heap) & Constants",
        "2. Data Types (Sizes & Ranges), Type Casting, Operators (Bitwise, Logical, Ternary) & Precedence",
        "3. Control Flow: Branching (if, switch) & Loop Constructs (for, while, do-while, break/continue)"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Functions, Arrays & String Manipulation",
      topics: [
        "1. Function Architecture, Pass-by-Value vs Pass-by-Reference, Scope (Local/Global) & Storage Classes (static, register, extern)",
        "2. Recursion Fundamentals, Call Stack Tracing & Tail Recursion Optimization",
        "3. Arrays (1D & 2D Multidimensional), Memory Contiguity & Matrix Operations",
        "4. String Handling, Null Terminator (\\0) & Standard Library Functions (<string.h>)"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Pointer Arithmetic & Dynamic Memory",
      topics: [
        "1. Pointer Syntax, Dereferencing (*), Address-of (&) & Pointer Arithmetic Rules",
        "2. Arrays vs Pointers, Pointers to Pointers (**ptr) & Arrays of Pointers",
        "3. Dynamic Memory Allocation (malloc, calloc, realloc, free) & Detecting Memory Leaks",
        "4. Function Pointers & Callback Mechanisms"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Structures, Unions & File I/O Streams",
      topics: [
        "1. User-Defined Types: Structures (struct), Padding/Alignment & Nested Structs",
        "2. Unions vs Structs (Memory Sharing) & Enumerations (enum)",
        "3. File Handling: File Pointers (FILE*), Opening Modes (r, w, a, rb, wb) & Buffer Flushing",
        "4. Sequential vs Random File Access (fseek, ftell, rewind) & Serialization"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. The GCC Compilation Pipeline & C Memory Layout",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The 4-Stage C Compilation Pipeline
C is a compiled language, meaning the human-readable source code is completely transformed into machine-readable binary executables before it runs. The GNU Compiler Collection (GCC) processes code in four distinct stages:

1. **Preprocessing (cpp):** 
   - Strips all comments from the code.
   - Expands macros (\`#define PI 3.14\`).
   - Includes header files (\`#include <stdio.h>\`) by literally copying and pasting their contents into the source file.
   - Outputs an intermediate \`.i\` file.
2. **Compilation (cc1):** 
   - Translates the pure C code into CPU-architecture specific Assembly Language.
   - Syntax and semantic checking occurs here.
   - Outputs an \`.s\` file.
3. **Assembly (as):** 
   - The Assembler translates the Assembly code into raw binary Machine Code (Object Code).
   - Outputs a \`.o\` (object) file. The code is binary, but memory addresses are not yet finalized.
4. **Linking (ld):** 
   - The Linker merges multiple object files together.
   - It links standard C library functions (like \`printf\`) from the OS into the final executable.
   - Resolves all memory addresses.
   - Outputs the final executable (\`a.out\` or \`.exe\`).

## 2. C Program Memory Architecture
When the OS executes a C program, it loads it into a highly structured segment of RAM:

1. **Code Segment (Text):** Read-only memory storing the actual binary machine instructions.
2. **Data Segment:** Stores initialized global and \`static\` variables (e.g., \`int x = 5;\`).
3. **BSS Segment (Block Started by Symbol):** Stores uninitialized global and \`static\` variables. The OS automatically zero-initializes them.
4. **The Heap:** Unmanaged, massive pool of memory used for **Dynamic Memory Allocation** at runtime (via \`malloc()\`). Memory here grows upwards. It is the programmer's absolute responsibility to \`free()\` this memory to prevent catastrophic memory leaks.
5. **The Stack:** Highly optimized LIFO data structure. Stores local variables and function call frames (return addresses, parameters). Memory here is automatically managed by the CPU—when a function returns, its stack frame is instantly popped/destroyed. The Stack grows downwards toward the Heap.`
    },
    {
      unit: "Unit I",
      title: "2. Data Types, Type Casting & Bitwise Operators",
      readTime: "14 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Primitive Data Types & Architectural Sizes
C is statically typed, but the exact byte-size of types is strictly dependent on the underlying compiler and CPU architecture (e.g., 32-bit vs 64-bit OS).
*Assuming a standard 64-bit GCC compiler:*

| Data Type | Byte Size | Format Specifier | Data Range |
| :--- | :--- | :--- | :--- |
| \`char\` | 1 Byte | \`%c\` | -128 to 127 (ASCII Characters) |
| \`int\` | 4 Bytes | \`%d\` | -2,147,483,648 to 2,147,483,647 |
| \`long int\` | 8 Bytes | \`%ld\` | -(2^63) to (2^63)-1 |
| \`float\` | 4 Bytes | \`%f\` | Single-precision floating point (6 decimal places) |
| \`double\` | 8 Bytes | \`%lf\` | Double-precision floating point (15 decimal places) |

**Unsigned Modifier:** Adding \`unsigned\` (e.g., \`unsigned int\`) shifts the range to start at 0, effectively doubling the positive limit (0 to 4,294,967,295).

## 2. Type Casting (Implicit vs Explicit)
- **Implicit Casting (Coercion):** Handled automatically by the compiler to prevent data loss. 
  - *Example:* \`int x = 5; float y = x;\` $\\rightarrow$ \`y\` becomes \`5.000000\`.
- **Explicit Casting:** Forced by the programmer. Can lead to data truncation.
  - *Example:* \`float pi = 3.14; int integerPi = (int)pi;\` $\\rightarrow$ Fractional part \`.14\` is violently truncated. \`integerPi\` becomes \`3\`.

## 3. Bitwise Operators (Hardware Level Manipulation)
C allows direct manipulation of individual binary bits, making it the supreme language for embedded systems and drivers.

| Operator | Symbol | Function | Example (A = 5 [0101], B = 3 [0011]) |
| :--- | :--- | :--- | :--- |
| **Bitwise AND** | \`&\` | 1 if BOTH bits are 1 | \`A & B = 0001\` (Result: 1) |
| **Bitwise OR** | \`\|\` | 1 if ANY bit is 1 | \`A \| B = 0111\` (Result: 7) |
| **Bitwise XOR** | \`^\` | 1 if bits are DIFFERENT | \`A ^ B = 0110\` (Result: 6) |
| **Bitwise NOT** | \`~\` | Inverts all bits | \`~A = 1010\` (Result: -6 due to 2's complement) |
| **Left Shift** | \`<<\` | Shifts bits left (Multiplies by 2) | \`A << 1 = 1010\` (Result: 10) |
| **Right Shift** | \`>>\` | Shifts bits right (Divides by 2) | \`A >> 1 = 0010\` (Result: 2) |`
    },
    {
      unit: "Unit I",
      title: "3. Control Flow Constructs (Branching & Looping)",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Branching Structures
Branching allows the program execution to deviate based on logical conditions.

### The \`switch-case\` Statement
Highly optimized for checking a single variable against multiple constant values. It acts as a jump-table at the assembly level, making it faster than multiple \`if-else if\` chains.
- **Critical Rule:** You MUST use the \`break;\` statement at the end of each \`case\`. If omitted, execution will "fall through" and execute all subsequent cases sequentially, regardless of their condition.
- **Limitation:** \`switch\` ONLY evaluates \`int\` or \`char\` types. It cannot evaluate \`float\`, strings, or complex expressions like \`x > 5\`.

## 2. Looping Constructs
Loops execute a block of code repeatedly until a condition evaluates to false (0).

### \`while\` vs \`do-while\`
- **\`while\` Loop:** An Entry-Controlled loop. The condition is checked *before* entering the body. If the condition is initially false, the loop executes **0 times**.
- **\`do-while\` Loop:** An Exit-Controlled loop. The condition is checked *after* executing the body. Therefore, a \`do-while\` loop is guaranteed to execute **at least 1 time**, making it perfect for menu-driven programs.

### Control Jumps (\`break\` vs \`continue\`)
- **\`break\`:** Instantly and violently terminates the entire loop execution. Control is transferred to the first statement following the loop block.
- **\`continue\`:** Skips the remaining code inside the loop body for the *current iteration only*, and immediately jumps to the next condition check/increment cycle.`
    },
    {
      unit: "Unit II",
      title: "1. Function Architecture, Pass-by-Value & Storage Classes",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Anatomy of a C Function
Functions break monolithic code into modular, reusable blocks. A function requires three components:
1. **Declaration (Prototype):** Informs the compiler about the function's signature before it's used. (e.g., \`int add(int a, int b);\`).
2. **Definition:** The actual code logic block.
3. **Call:** The execution trigger.

### Pass-by-Value Paradigm
By default, C is strictly a "Pass-by-Value" language. 
When you pass variables into a function, C creates a completely new, independent **copy** of those values inside the function's Stack Frame.
- **Consequence:** If the function modifies those parameters, the original variables in the calling function are entirely unaffected.
- **Solution (Pass-by-Reference Simulation):** To modify the original variables, you must explicitly pass their memory addresses using Pointers (\`&\`).

## 2. Storage Classes in C
Storage classes define a variable's scope (visibility), lifetime (duration in RAM), and default initial value.

1. **\`auto\` (Default for local variables):**
   - **Storage:** Stack RAM.
   - **Initial Value:** Garbage (random memory residue).
   - **Scope:** Local to the block \`{}\`.
   - **Lifetime:** Destroyed when the block exits.
2. **\`static\` (Persistent State):**
   - **Storage:** Data/BSS Segment.
   - **Initial Value:** Zero \`0\`.
   - **Scope:** Local to the block.
   - **Lifetime:** Exists for the entire duration of the program execution. It retains its value between multiple function calls.
3. **\`register\` (High Speed):**
   - **Storage:** CPU Register (Hardware Cache) instead of RAM.
   - **Usage:** Used for rapidly iterating loop counters to avoid RAM latency.
   - **Limitation:** You cannot use the address-of \`&\` operator on a register variable, because CPU registers do not have RAM memory addresses.
4. **\`extern\` (Global Linkage):**
   - Instructs the compiler that a global variable is defined in a completely different \`.c\` file, allowing multiple files to share the exact same variable memory space.`
    },
    {
      unit: "Unit II",
      title: "2. Recursion Fundamentals & Stack Tracing",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Mechanics of Recursion
Recursion occurs when a function calls itself to solve a smaller instance of the same problem. Every valid recursive algorithm must possess two strict components:
1. **The Base Case:** The terminating condition that abruptly stops the recursion. Without it, the function calls itself infinitely until it triggers a **Stack Overflow Error** (crashing the program because it ran out of Stack memory).
2. **The Recursive Step:** The logic that modifies the parameters, pushing them closer to the Base Case with each iteration.

## 2. Call Stack Tracing: Factorial Example
Consider \`int fact(int n) { if(n==1) return 1; return n * fact(n-1); }\`
If we call \`fact(3)\`:

1. \`fact(3)\` executes. It pauses, waiting for \`3 * fact(2)\`. A frame is pushed to the Stack.
2. \`fact(2)\` executes. It pauses, waiting for \`2 * fact(1)\`. A frame is pushed to the Stack.
3. \`fact(1)\` executes. It hits the Base Case and **returns 1**.
4. The Stack unwinds (pops):
   - \`fact(2)\` resumes: \`2 * 1 = 2\`. It returns 2.
   - \`fact(3)\` resumes: \`3 * 2 = 6\`. It returns 6 to the main program.

## 3. Tail Recursion Optimization
A recursive function is "Tail Recursive" if the recursive call is the absolute *last* operation performed in the function before returning. (Notice in the standard factorial above, the multiplication \`n * ...\` happens *after* the recursive call returns, so it is NOT tail recursive).

**Tail Recursive Factorial:**
\`\`\`c
int tail_fact(int n, int accumulator) {
    if (n == 1) return accumulator;
    // The recursive call is the ONLY operation returning
    return tail_fact(n - 1, n * accumulator); 
}
// Called as: tail_fact(5, 1);
\`\`\`
**Why it matters:** Advanced C compilers detect Tail Recursion and optimize it into a standard \`while\` loop under the hood. It reuses the exact same Stack Frame for every call, completely eliminating the risk of a Stack Overflow, regardless of how deep the recursion goes.`
    },
    {
      unit: "Unit II",
      title: "3. Arrays & String Manipulation Architecture",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. 1D Array Memory Contiguity
An Array is a homogeneous collection of elements stored in absolutely **contiguous (adjacent)** memory locations.
\`int arr[5] = {10, 20, 30, 40, 50};\`
If the array starts at memory address \`1000\`, and an \`int\` is 4 bytes:
- \`arr[0]\` is at 1000.
- \`arr[1]\` is at 1004.
- \`arr[2]\` is at 1008.

**The Array Name Decayed as a Pointer:**
In C, the name of an array (e.g., \`arr\`) is fundamentally a constant pointer pointing to the memory address of the 0th element. \`arr\` is perfectly equivalent to \`&arr[0]\`.

## 2. 2D Multidimensional Arrays (Matrices)
Stored as an "array of arrays." 
\`int matrix[3][4];\` (3 rows, 4 columns).
Despite the 2D grid visualization, RAM is strictly 1-dimensional. The compiler uses Row-Major Order to map the 2D grid into contiguous 1D memory.
- Formula to find the address of \`matrix[i][j]\`:
  \`Address = BaseAddress + [ (i * TotalColumns) + j ] * ElementSize\`

## 3. C String Architecture & The Null Terminator
Unlike modern languages, C does not have a native \`String\` object. A string is merely a 1-dimensional Array of \`char\`s.
- **The Critical Rule:** To allow algorithms (like \`printf\`) to know where a string ends without knowing its array size, C mandates that all strings MUST be terminated by the **Null Character (\`'\\0'\`)**, which has an ASCII value of 0.
- Therefore, to store the word "HELLO" (5 letters), the array MUST be at least 6 characters wide to accommodate \`['H', 'E', 'L', 'L', 'O', '\\0']\`.

### Standard String Functions (\`<string.h>\`)
- \`strlen(str)\`: Returns length *excluding* the null terminator.
- \`strcpy(dest, src)\`: Copies source string into destination array. Danger: Vulnerable to Buffer Overflow if destination is too small.
- \`strcmp(str1, str2)\`: Lexicographically compares two strings. Returns 0 if identical.
- \`strcat(dest, src)\`: Concatenates source to the end of destination.`
    },
    {
      unit: "Unit III",
      title: "1. Pointer Architecture, Dereferencing & Arithmetic",
      readTime: "14 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Pointer Fundamentals
A Pointer is a variable whose sole purpose is to store the physical hexadecimal RAM **memory address** of another variable.

- **Declaration (\`*\`):** \`int *ptr;\` (Declares a pointer that will hold the address of an integer).
- **Address-Of Operator (\`&\`):** Extracts the memory address of a variable. \`ptr = &var;\`.
- **Dereferencing Operator (\`*\`):** Accesses or manipulates the actual data stored at the memory address the pointer is pointing to. \`*ptr = 100;\` (Changes the original \`var\` to 100).

### The "Pass-by-Reference" Implementation
To modify variables inside a function, we pass their addresses:
\`\`\`c
void swap(int *a, int *b) {
    int temp = *a; // Read value at address 'a'
    *a = *b;       // Write value at 'b' into address 'a'
    *b = temp;
}
// Called as: swap(&x, &y);
\`\`\`

## 2. Pointer Arithmetic
You can perform mathematical operations on pointers (\`+\`, \`-\`, \`++\`, \`--\`).
- **Critical Scaling Rule:** Adding 1 to a pointer does NOT add 1 byte to the memory address. It adds **1 multiplied by the \`sizeof\` the data type it points to**.
- If \`int *p = 1000;\` (and \`int\` is 4 bytes).
- Executing \`p++;\` moves the pointer to address **1004**, not 1001. This scaling is what allows pointers to seamlessly iterate through arrays.

### Array-Pointer Equivalence
Because \`arr\` points to \`&arr[0]\`, and pointers scale mathematically, the compiler internally translates all array indexing into pointer arithmetic.
- \`arr[3]\` is compiled exactly as \`*(arr + 3)\`.

## 3. Pointers to Pointers (Double Pointers)
A Double Pointer stores the memory address of a Single Pointer.
\`\`\`c
int x = 50;
int *p1 = &x;     // p1 stores address of x
int **p2 = &p1;   // p2 stores address of p1

printf("%d", **p2); // Output: 50. (Dereference p2 to get p1, dereference p1 to get x)
\`\`\``
    },
    {
      unit: "Unit III",
      title: "2. Dynamic Memory Allocation & Memory Leaks",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Limitation of Static Memory
When you declare an array like \`int arr[100];\`, the memory size is hardcoded into the executable. 
- If the user only needs 5 elements, 95 elements of RAM are wasted.
- If the user needs 150 elements, the program crashes (Buffer Overflow).
This memory is allocated on the **Stack** at compile time.

## 2. Dynamic Memory Allocation (The Heap)
To allocate memory during runtime based on actual user input, C uses the **Heap**. The \`<stdlib.h>\` library provides four critical functions:

1. **\`malloc(size_t size)\`:**
   - Allocates a single, raw contiguous block of memory of the specified byte size.
   - **Crucial:** It does NOT initialize the memory. It contains dangerous "garbage" values.
   - Example: \`int *arr = (int*) malloc(5 * sizeof(int));\`
2. **\`calloc(size_t num, size_t size)\`:**
   - Allocates memory for an array of \`num\` elements.
   - **Crucial:** It heavily zero-initializes the memory. Slower than \`malloc\` but safer.
3. **\`realloc(void *ptr, size_t new_size)\`:**
   - Resizes an existing heap allocation dynamically. If the current block cannot expand in place, it allocates a new block, copies the old data over, frees the old block, and returns the new pointer.
4. **\`free(void *ptr)\`:**
   - Deallocates (destroys) the memory block, releasing it back to the Operating System.

## 3. Memory Leaks and Segmentation Faults
- **Memory Leak:** If a program allocates memory via \`malloc\` but fails to call \`free()\`, that memory is "leaked." The OS considers it in-use, but the program has lost the pointer to it. If this happens in a loop, the program will slowly consume all system RAM and crash the OS.
- **Dangling Pointer:** If you \`free(ptr)\`, the memory is released, but \`ptr\` still holds the old address. If you try to dereference \`*ptr\` again, the OS will violently terminate the program with a **Segmentation Fault** (access violation). Always set \`ptr = NULL;\` immediately after freeing.

## 4. Function Pointers
A pointer can point to the memory address of an executable function in the Code Segment. This allows passing functions as arguments to other functions (Callback Mechanism).
\`\`\`c
void sayHello() { printf("Hello"); }
// Declare a function pointer returning void, taking no arguments
void (*funcPtr)() = &sayHello;
funcPtr(); // Executes the function!
\`\`\``
    },
    {
      unit: "Unit IV",
      title: "1. Structures, Unions & Memory Alignment",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Structures (\`struct\`)
While arrays group data of the *same* type, a \`struct\` groups data of *heterogeneous* types under a single, unified memory block (a user-defined Data Type).

\`\`\`c
struct Student {
    int roll;
    char name[50];
    float marks;
};
// Declaration: struct Student s1;
// Access: s1.roll = 101;
\`\`\`
- **Pointer Access:** If accessing a struct through a pointer, you must use the Arrow Operator (\`->\`).
  \`struct Student *ptr = &s1;\`
  \`ptr->roll = 101;\` (which is shorthand for \`(*ptr).roll\`).

### Struct Padding & Memory Alignment
If a struct contains \`char\` (1 byte) and \`int\` (4 bytes), one might assume the total size is 5 bytes. 
- However, CPUs read RAM in 4-byte or 8-byte chunks (Word Size). To optimize CPU read speed, the C compiler injects empty, invisible "Padding Bytes" between members to ensure the \`int\` aligns perfectly on a 4-byte address boundary.
- Result: \`sizeof(struct)\` is often larger than the sum of its parts.

## 2. Unions (Shared Memory Space)
A \`union\` has the exact same syntax as a \`struct\`, but a fundamentally different memory architecture.
- In a \`struct\`, every member gets its own distinct memory space.
- In a \`union\`, ALL members share the exact same physical memory address. 
- The size of the union is dictated entirely by the size of its largest member.
- **Use Case:** You can only store a value in ONE member at a time. Modifying one member corrupts the data of all other members. Highly useful in embedded systems for memory optimization or type-punning hardware registers.

\`\`\`c
union Data {
    int i;    // 4 bytes
    float f;  // 4 bytes
    char c;   // 1 byte
}; // Total size of Union is exactly 4 bytes.
\`\`\`

## 3. Enumerations (\`enum\`)
\`enum\` allows you to create a custom data type restricted to a predefined list of named integer constants, enhancing code readability.
\`\`\`c
enum Weekday { MONDAY, TUESDAY, WEDNESDAY };
// Internally, MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2
\`\`\``
    },
    {
      unit: "Unit IV",
      title: "2. File Handling Architecture, Streams & Random Access",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The \`FILE\` Pointer and Streams
In C, all Input/Output operations abstract hardware (keyboards, screens, hard drives) into uniform data **Streams**.
To interact with a file on the hard drive, C uses an opaque structure pointer called \`FILE *\`.

### Opening Files (\`fopen\`)
\`FILE *fp = fopen("data.txt", "w");\`
- If successful, the OS allocates a RAM buffer, establishes an I/O stream, and returns the file pointer.
- If it fails (e.g., file doesn't exist in read mode, or lacking permissions), it returns \`NULL\`. **Always check for NULL**.

### Access Modes
- \`"r"\`: Read-only. File must exist.
- \`"w"\`: Write-only. **WARNING:** Completely overwrites and truncates an existing file to zero length. Creates file if missing.
- \`"a"\`: Append mode. Writes data at the absolute end of the file, preserving existing content.
- Binary Modes (\`"rb"\`, \`"wb"\`): Processes exact raw bytes without translating newline characters (crucial for images/executables).

## 2. Reading and Writing Data
- **Character Level:** \`fputc(char, fp)\`, \`fgetc(fp)\`.
- **String Level:** \`fputs(str, fp)\`, \`fgets(buffer, size, fp)\`.
- **Formatted Data:** \`fprintf(fp, "%d %s", id, name)\`, \`fscanf(fp, "%d", &id)\`. (fscanf stops reading at the first whitespace).
- **Binary/Block Data:** \`fwrite(&structData, sizeof(struct), 1, fp)\`, \`fread()\`. Essential for high-speed serialization of massive arrays or structs directly to disk without string conversion.

## 3. Random Access (Jumping inside a file)
By default, files are read sequentially (byte 0 to end). C provides tools to manipulate the internal File Position Indicator to jump to any byte instantly.

1. **\`ftell(FILE *fp)\`:** Returns the current byte offset position of the cursor from the beginning of the file. (Often used to find total file size).
2. **\`fseek(FILE *fp, long offset, int origin)\`:** Moves the cursor to a specific byte location.
   - \`SEEK_SET\`: Offset from the beginning of the file.
   - \`SEEK_CUR\`: Offset relative to the current cursor position.
   - \`SEEK_END\`: Offset relative to the end of the file (usually a negative offset).
3. **\`rewind(FILE *fp)\`:** Shorthand for \`fseek(fp, 0, SEEK_SET)\`. Snaps cursor back to the very beginning.

### Closing Files
\`fclose(fp);\`
- **Critical:** Closing a file flushes any remaining data from the RAM buffer onto the hard drive, releases the OS file lock, and prevents data corruption.`
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 2,
      question: "What is the primary difference between the Stack and the Heap memory segments in a C program execution?",
      probability: "High Probability",
      examFrequency: "PU 2021, 2023"
    },
    {
      unit: "Unit I",
      marks: 10,
      question: "Detail the 4 stages of the GCC compilation pipeline. Then, explain Bitwise Operators with examples for AND, OR, XOR, and Left Shift.",
      probability: "High Probability",
      examFrequency: "10-Mark Core Theory Question"
    },
    {
      unit: "Unit II",
      marks: 2,
      question: "Define Tail Recursion and explain why it is highly optimized by compilers compared to standard recursion.",
      probability: "Medium Probability",
      examFrequency: "PU 2024"
    },
    {
      unit: "Unit II",
      marks: 10,
      question: "Differentiate between Pass-by-Value and Pass-by-Reference in C functions. Provide a complete program demonstrating how to swap two integers using Pass-by-Reference via pointers.",
      probability: "High Probability",
      examFrequency: "10-Mark Compulsory Question"
    },
    {
      unit: "Unit III",
      marks: 2,
      question: "What occurs if you attempt to access memory through a Dangling Pointer?",
      probability: "High Probability",
      examFrequency: "PU 2022, 2025"
    },
    {
      unit: "Unit III",
      marks: 10,
      question: "Exhaustively explain Dynamic Memory Allocation in C. Compare malloc(), calloc(), and realloc(), highlighting the critical differences in their initialization behaviors.",
      probability: "High Probability",
      examFrequency: "10-Mark Core Topic PU Exams"
    },
    {
      unit: "Unit IV",
      marks: 2,
      question: "Explain the architectural difference regarding memory allocation between a 'struct' and a 'union'.",
      probability: "High Probability",
      examFrequency: "PU 2023, 2024"
    },
    {
      unit: "Unit IV",
      marks: 10,
      question: "Write a complete, robust C program that defines a Student struct (Roll, Name, Marks), accepts input for 3 students, and utilizes fwrite() to serialize the structs sequentially into a binary file on disk.",
      probability: "High Probability",
      examFrequency: "10-Mark Practical Application"
    }
  ],
  solutions: [
    {
      unit: "Unit II",
      question: "Differentiate between Pass-by-Value and Pass-by-Reference in C functions. Provide a complete program demonstrating how to swap two integers using Pass-by-Reference via pointers.",
      solution: `### Part 1: Pass-by-Value vs Pass-by-Reference
- **Pass-by-Value:** The compiler creates an entirely independent copy of the variables in the invoked function's stack frame. Modifying the parameters inside the function has zero effect on the original variables in the calling function. C natively supports only pass-by-value.
- **Pass-by-Reference:** The memory addresses of the variables are passed instead of the data itself. The invoked function uses pointers to dereference and directly mutate the original variables existing in the caller's stack frame.

### Part 2: Implementation (Swap Program)
\`\`\`c
#include <stdio.h>

// Function Prototype expecting integer pointers (Addresses)
void swapIntegers(int *x, int *y);

int main() {
    int a = 10;
    int b = 99;
    
    printf("Before Swap: a = %d, b = %d\\n", a, b);
    
    // Pass the exact memory addresses of a and b using '&'
    swapIntegers(&a, &b);
    
    printf("After Swap:  a = %d, b = %d\\n", a, b);
    return 0;
}

// Function Definition
void swapIntegers(int *x, int *y) {
    // Dereference (*) to read and write actual values at the memory addresses
    int temp = *x; 
    *x = *y;
    *y = temp;
}
\`\`\``
    },
    {
      unit: "Unit III",
      question: "Exhaustively explain Dynamic Memory Allocation in C. Compare malloc(), calloc(), and realloc(), highlighting the critical differences in their initialization behaviors.",
      solution: `### Dynamic Memory Allocation (DMA) Overview
DMA allows a program to request custom blocks of memory from the **Heap** during runtime, based on dynamic conditions (like user input), bypassing the strict limits of Stack-allocated static arrays.

All DMA functions reside in \`<stdlib.h>\` and return a \`void *\` (generic pointer) which must be type-cast to the desired pointer type. Crucially, the programmer is entirely responsible for deallocating this memory using \`free(ptr)\` to prevent Memory Leaks.

### 1. malloc() (Memory Allocation)
- **Syntax:** \`void* malloc(size_t size);\`
- **Behavior:** Allocates a single contiguous block of memory of the specified byte size.
- **Initialization:** **None.** The memory contains dangerous garbage values leftover from previous OS processes.
- **Example:** \`int *arr = (int*) malloc(5 * sizeof(int));\`

### 2. calloc() (Contiguous Allocation)
- **Syntax:** \`void* calloc(size_t num_elements, size_t element_size);\`
- **Behavior:** Allocates contiguous memory for an array of elements.
- **Initialization:** **Zero-Initialized.** It iterates over the block and sets every single byte to zero (0). It is inherently slower than malloc but much safer for initializing arrays.
- **Example:** \`int *arr = (int*) calloc(5, sizeof(int));\`

### 3. realloc() (Re-Allocation)
- **Syntax:** \`void* realloc(void *ptr, size_t new_size);\`
- **Behavior:** Dynamically resizes a previously allocated memory block. 
  - If the heap has contiguous free space adjacent to the current block, it expands the block in place. 
  - If not, it violently allocates a brand new block of \`new_size\`, safely copies all data from the old block to the new one, executes a \`free()\` on the old block, and returns the pointer to the new block.`
    },
    {
      unit: "Unit IV",
      question: "Write a complete, robust C program that defines a Student struct (Roll, Name, Marks), accepts input for 3 students, and utilizes fwrite() to serialize the structs sequentially into a binary file on disk.",
      solution: `### Implementation: Binary File Serialization
Binary mode (\`"wb"\`) combined with \`fwrite()\` allows us to write the raw, unformatted byte memory of the struct directly to disk at maximum hardware speed, without dealing with string conversion or newline characters.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

// Define the Structure
struct Student {
    int roll;
    char name[50];
    float marks;
};

int main() {
    // Array of 3 struct instances
    struct Student class_data[3];
    FILE *fp;

    // Collect data from user
    printf("--- Enter Details for 3 Students ---\\n");
    for (int i = 0; i < 3; i++) {
        printf("Student %d - Roll: ", i + 1);
        scanf("%d", &class_data[i].roll);
        
        printf("Student %d - Name: ", i + 1);
        // Clear newline buffer before reading string
        while (getchar() != '\\n');
        fgets(class_data[i].name, sizeof(class_data[i].name), stdin);
        
        printf("Student %d - Marks: ", i + 1);
        scanf("%f", &class_data[i].marks);
    }

    // Open file in Write-Binary ("wb") mode
    fp = fopen("students.dat", "wb");
    if (fp == NULL) {
        printf("CRITICAL ERROR: Unable to open file for writing.\\n");
        return 1;
    }

    // Serialize the array directly to the binary file
    // Syntax: fwrite(ptr_to_data, size_of_one_element, number_of_elements, file_ptr)
    size_t elements_written = fwrite(class_data, sizeof(struct Student), 3, fp);

    if (elements_written == 3) {
        printf("\\nSUCCESS: 3 Structs serialized to students.dat successfully.\\n");
    } else {
        printf("\\nERROR: Disk write failure.\\n");
    }

    // Flush buffer and release lock
    fclose(fp);

    return 0;
}
\`\`\``
    }
  ]
};
