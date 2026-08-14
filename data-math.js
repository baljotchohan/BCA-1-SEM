const SUBJECT_MATH = {
  id: "math-stats",
  code: "BCA-DSC-3(Maj)-103A",
  title: "Fundamentals of Mathematical Statistics",
  type: "Major Core",
  credits: 4,
  theoryHours: 45,
  practicalHours: 15,
  assessment: { internal: 5, external: 45, practical: 50, total: 100 },
  icon: "fa-chart-line",
  bgClass: "bg-purple",
  description: "Advanced mathematical statistics covering measures of central tendency, dispersion, probability theorems (Bayes'), random variables, discrete/continuous distributions, and correlation/regression analysis.",
  tags: ["Probability", "Regression", "Variance", "Distributions", "Bayes Theorem", "Statistics"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Descriptive Statistics & Dispersion",
      topics: [
        "1. Definition & Scope of Statistics, Primary vs Secondary Data Collection & Tabulation",
        "2. Measures of Central Tendency: Arithmetic, Geometric & Harmonic Mean, Median, Mode",
        "3. Measures of Dispersion: Range, Quartile Deviation, Mean Deviation & Standard Deviation",
        "4. Coefficient of Variation, Skewness (Karl Pearson & Bowley's) & Kurtosis"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Probability Theory & Theorems",
      topics: [
        "1. Conceptual Probability: Deterministic vs Random Experiments, Sample Space & Events",
        "2. Mathematical & Statistical Definitions of Probability, Axiomatic Approach",
        "3. Addition and Multiplication Theorems of Probability for Independent & Dependent Events",
        "4. Conditional Probability & Deep Dive into Bayes' Theorem (Inverse Probability)"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Random Variables & Probability Distributions",
      topics: [
        "1. Random Variables (Discrete vs Continuous), Probability Mass Function (PMF) & Probability Density Function (PDF)",
        "2. Mathematical Expectation (Expected Value) & Variance of Random Variables",
        "3. Discrete Theoretical Distributions: Binomial Distribution & Poisson Distribution (Parameters & Properties)",
        "4. Continuous Theoretical Distributions: Normal Distribution (Properties, Standard Normal Curve & Z-Scores)"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Correlation & Regression Analysis",
      topics: [
        "1. Bivariate Data Analysis, Scatter Diagrams & Concept of Correlation",
        "2. Karl Pearson’s Coefficient of Correlation ($r$) & Spearman’s Rank Correlation Coefficient",
        "3. Concept of Linear Regression & Principle of Least Squares",
        "4. Properties of Regression Coefficients ($b_{xy}$ and $b_{yx}$) & Angle between Regression Lines"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. Measures of Central Tendency: AM, GM, HM & Partition Values",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Concept of Central Tendency
Central tendency identifies a single mathematical value that represents the exact "center" or typical value of an entire dataset. 

### Arithmetic Mean (AM)
The most common average, calculated by dividing the sum of all observations by the number of observations.
- **Formula (Ungrouped Data):** $\\bar{x} = \\frac{\\sum x_i}{n}$
- **Formula (Grouped Frequency Data):** $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$ (where $x_i$ is the class midpoint).
- **Properties:**
  1. The algebraic sum of deviations of a set of values from their arithmetic mean is zero: $\\sum (x_i - \\bar{x}) = 0$.
  2. The sum of squared deviations from the mean is minimized: $\\sum (x_i - \\bar{x})^2$ is less than $\\sum (x_i - A)^2$ for any arbitrary constant $A$.

### Geometric Mean (GM)
Used specifically for calculating average rates of change, compound interest, or ratios over time. It dampens the effect of extreme outliers.
- **Formula:** $GM = \\sqrt[n]{x_1 \\cdot x_2 \\dots x_n}$
- **Logarithmic Calculation (For large datasets):** $\\log(GM) = \\frac{\\sum \\log(x_i)}{n}$

### Harmonic Mean (HM)
Used exclusively for averaging rates, such as speed (km/h) or prices over fixed quantities.
- **Formula:** $HM = \\frac{n}{\\sum \\frac{1}{x_i}}$
- **Mathematical Relationship:** For any set of distinct positive observations: **$AM > GM > HM$**.

## 2. Partition Values: Median, Quartiles, Deciles & Percentiles
While the Mean is calculated using magnitude, Partition Values divide a sorted dataset (ascending order) into equal fractional parts based entirely on *position*.

### The Median
The absolute middle value that splits the sorted dataset into two equal 50% halves.
- **Ungrouped Data:** If $n$ is odd, Median is the $(n+1)/2$ th term. If $n$ is even, it is the average of the $n/2$ and $(n/2)+1$ terms.
- **Continuous Grouped Data:** 
  $$Median = l + \\left( \\frac{\\frac{N}{2} - c.f.}{f} \\right) \\times h$$
  Where $l$ = lower limit of median class, $N$ = total frequency, $c.f.$ = cumulative frequency of preceding class, $f$ = frequency of median class, $h$ = class width.

### Quartiles ($Q_1, Q_2, Q_3$)
Divide the dataset into 4 equal quarters (25% each).
- **First Quartile ($Q_1$):** Value at the 25th percentile. Separates the lowest 25% from the highest 75%.
- **Third Quartile ($Q_3$):** Value at the 75th percentile.
- **Formula for Grouped Data:** $Q_i = l + \\left( \\frac{\\frac{iN}{4} - c.f.}{f} \\right) \\times h$ (where $i = 1, 2, 3$).`
    },
    {
      unit: "Unit I",
      title: "2. Measures of Dispersion: Standard Deviation & Coefficient of Variation",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Necessity of Dispersion
Central tendency alone is dangerously inadequate. Consider two datasets:
- Set A: 48, 50, 52 (Mean = 50)
- Set B: 0, 50, 100 (Mean = 50)
Both have the same mean, but Set B is wildly volatile. Dispersion measures the exact "spread" or volatility of the data around the central value.

## 2. Standard Deviation ($\\sigma$)
The absolute gold standard for measuring dispersion in probability theory. It calculates the root-mean-square deviation of values from their Arithmetic Mean.
- **Ungrouped Data Formula:** $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$
- **Grouped Data Formula:** $\\sigma = \\sqrt{\\frac{\\sum f_i (x_i - \\bar{x})^2}{N}}$
- **Variance:** Simply the square of the standard deviation ($\\sigma^2$). It lacks the original units of measurement, which is why $\\sigma$ is preferred.

### Important Mathematical Properties of $\\sigma$
1. **Independent of Origin:** Adding or subtracting a constant from every observation does NOT change the standard deviation. ($\\sigma_{x+c} = \\sigma_x$).
2. **Dependent on Scale:** Multiplying every observation by a constant multiplies the standard deviation by the absolute value of that constant. ($\\sigma_{cx} = |c| \\sigma_x$).

## 3. Coefficient of Variation (C.V.)
Standard Deviation is an *absolute* measure of dispersion. You cannot use it to compare the volatility of two datasets measured in different units (e.g., comparing weight in kg vs height in cm), or datasets with vastly different means (e.g., stock prices of $10 vs $1000).

To compare relative volatility, we compute the dimensionless **Coefficient of Variation**.
$$C.V. = \\left( \\frac{\\sigma}{\\bar{x}} \\right) \\times 100$$
- **Interpretation:** The dataset with the higher C.V. is more volatile/variable. The dataset with the lower C.V. is more consistent/stable.

## 4. Skewness and Kurtosis
- **Skewness:** Measures the lack of symmetry in a bell curve.
  - **Right (Positive) Skew:** The right tail is elongated. Mean > Median > Mode.
  - **Left (Negative) Skew:** The left tail is elongated. Mean < Median < Mode.
  - **Karl Pearson's Coefficient of Skewness:** $S_k = \\frac{Mean - Mode}{\\sigma}$.
- **Kurtosis:** Measures the "peakedness" or thickness of the tails of a distribution relative to a normal distribution.
  - Platykurtic (Flat), Mesokurtic (Normal), Leptokurtic (Highly Peaked).`
    },
    {
      unit: "Unit II",
      title: "1. Axiomatic Probability, Conditional Probability & Bayes' Theorem",
      readTime: "14 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Core Terminology
- **Random Experiment:** An experiment where all possible outcomes are known, but the exact outcome of a specific trial cannot be predicted (e.g., rolling a die).
- **Sample Space ($S$):** The set of *all* possible mutually exclusive outcomes. For a die, $S = \\{1, 2, 3, 4, 5, 6\\}$.
- **Event ($E$):** A subset of the Sample Space. (e.g., "Rolling an even number" = $\\{2, 4, 6\\}$).

## 2. Axiomatic Approach to Probability
Proposed by A.N. Kolmogorov in 1933, modern probability is built on three strict mathematical axioms. For any event $A$ in Sample Space $S$:
1. **Axiom of Non-negativity:** $P(A) \\geq 0$. (Probability cannot be negative).
2. **Axiom of Certainty:** $P(S) = 1$. (The probability of *any* outcome in the sample space occurring is 100%).
3. **Axiom of Additivity:** If $A$ and $B$ are mutually exclusive (disjoint, $A \\cap B = \\emptyset$), then $P(A \\cup B) = P(A) + P(B)$.

### The Addition Theorem (General)
If $A$ and $B$ are NOT mutually exclusive (they can happen simultaneously):
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

## 3. Conditional Probability
The probability of an event $A$ occurring, *given that* we already know event $B$ has occurred. It mathematically reduces the Sample Space from $S$ to $B$.
$$P(A | B) = \\frac{P(A \\cap B)}{P(B)}, \\quad \\text{where } P(B) > 0$$
- **Multiplication Theorem (Dependent Events):** $P(A \\cap B) = P(B) \\cdot P(A | B)$.
- **Multiplication Theorem (Independent Events):** If $A$ and $B$ are completely independent (one does not affect the other), then $P(A | B) = P(A)$. Thus, $P(A \\cap B) = P(A) \\cdot P(B)$.

## 4. Deep Dive: Bayes' Theorem (Inverse Probability)
Bayes' Theorem allows us to mathematically "reverse" conditional probability. If we know $P(Effect | Cause)$, Bayes allows us to calculate $P(Cause | Effect)$.

**Theorem Statement:**
Let $E_1, E_2, \\dots, E_n$ be a set of mutually exclusive and exhaustive events forming a partition of the sample space, and let $A$ be any observable event that occurs in conjunction with them.

$$P(E_i | A) = \\frac{P(E_i) \\cdot P(A | E_i)}{\\sum_{j=1}^{n} P(E_j) \\cdot P(A | E_j)}$$

### Terminology:
- **Prior Probability ($P(E_i)$):** Initial probability of the hypothesis before observing new evidence.
- **Likelihood ($P(A | E_i)$):** The probability of observing the evidence $A$, assuming hypothesis $E_i$ is true.
- **Posterior Probability ($P(E_i | A)$):** The updated, revised probability of the hypothesis *after* observing the new evidence $A$.

### Classic Application (Medical Testing):
If a patient tests positive for a rare disease (Event $A$), what is the probability they *actually* have the disease (Event $E_1$)? Bayes' Theorem incorporates the base-rate rarity of the disease, preventing the "Base Rate Fallacy" where doctors assume a 99% accurate test means a 99% chance of sickness.`
    },
    {
      unit: "Unit III",
      title: "1. Random Variables, PMF & Mathematical Expectation",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Random Variables
A Random Variable ($X$) is a real-valued function that assigns a numerical value to every possible outcome in a sample space. It bridges the gap between abstract probability events (like "Heads" or "Tails") and algebra.

- **Discrete Random Variable:** Takes on a countable number of distinct values (e.g., number of defective items in a batch, number of students present: $0, 1, 2, 3$).
- **Continuous Random Variable:** Takes on an infinite, uncountable number of values within a continuous interval (e.g., exact height of a student, exact time taken to compile a program).

## 2. Probability Mass Function (PMF)
For a Discrete Random Variable, the PMF assigns a precise probability to each distinct value $x$. denoted as $P(X = x) = p(x)$.
Conditions for a valid PMF:
1. $p(x) \\geq 0$ for all $x$.
2. $\\sum p(x) = 1$ (The sum of all probabilities must equal 100%).

## 3. Mathematical Expectation (Expected Value)
The Mathematical Expectation, denoted as $E(X)$, is the theoretical Arithmetic Mean of a random variable over an infinite number of trials. It represents the long-run average outcome.
$$E(X) = \\sum x_i \\cdot p(x_i)$$

### Properties of Expectation
1. The expected value of a constant is the constant itself: $E(c) = c$.
2. Constant scaling: $E(cX) = c \\cdot E(X)$.
3. Addition rule (Linearity): $E(X + Y) = E(X) + E(Y)$, regardless of whether $X$ and $Y$ are independent.
4. Multiplication rule: $E(XY) = E(X) \\cdot E(Y)$, **ONLY IF** $X$ and $Y$ are completely independent.

## 4. Variance of a Random Variable
Variance measures the expected mathematical spread of the random variable around its Expected Value $E(X)$.
$$Var(X) = E([X - E(X)]^2) = E(X^2) - [E(X)]^2$$
- **Property:** $Var(cX) = c^2 \\cdot Var(X)$. (Constants pull out as squares).`
    },
    {
      unit: "Unit III",
      title: "2. Theoretical Distributions: Binomial, Poisson & Normal",
      readTime: "14 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Binomial Distribution (Discrete)
Developed by Jacob Bernoulli, this models an experiment consisting of $n$ identical, independent trials (Bernoulli trials), where each trial has only two possible outcomes: Success (probability $p$) or Failure (probability $q = 1-p$).

- **Probability Mass Function (PMF):** The probability of getting exactly $x$ successes in $n$ trials is:
  $$P(X = x) = \\binom{n}{x} p^x q^{n-x}, \\quad \\text{for } x = 0, 1, 2, \\dots, n$$
  *(Where $\\binom{n}{x} = \\frac{n!}{x!(n-x)!}$)*
- **Parameters:** $n$ and $p$.
- **Constants:** 
  - Mean $= np$
  - Variance $= npq$
  - Standard Deviation $= \\sqrt{npq}$
- *(Note: In a Binomial Distribution, the Mean is always strictly greater than the Variance).*

## 2. The Poisson Distribution (Discrete)
Discovered by Siméon Denis Poisson, this models the number of times a rare event occurs in a fixed interval of time or space (e.g., number of server crashes per hour, number of typos per page). It is the limiting case of the Binomial distribution when $n \\to \\infty$ and $p \\to 0$.

- **Probability Mass Function (PMF):**
  $$P(X = x) = \\frac{e^{-\\lambda} \\lambda^x}{x!}, \\quad \\text{for } x = 0, 1, 2, \\dots, \\infty$$
- **Parameter:** $\\lambda$ (The average rate of occurrence).
- **Constants:**
  - Mean $= \\lambda$
  - Variance $= \\lambda$
- *(Note: A unique property of the Poisson distribution is that the Mean is exactly equal to the Variance).*

## 3. The Normal Distribution (Continuous)
The most important distribution in all of statistics (The Gaussian Bell Curve). Due to the Central Limit Theorem, the sums/averages of large numbers of independent variables invariably converge to a Normal Distribution, regardless of their underlying original distribution.

- **Probability Density Function (PDF):**
  $$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2} \\left( \\frac{x-\\mu}{\\sigma} \\right)^2}, \\quad -\\infty < x < \\infty$$
- **Parameters:** $\\mu$ (Mean) and $\\sigma$ (Standard Deviation).

### Properties of the Normal Curve
1. **Symmetry:** The curve is perfectly symmetrical around the central axis $x = \\mu$. Thus, Skewness $= 0$.
2. **Coincidence:** The Mean, Median, and Mode are exactly identical and fall at the center peak.
3. **Asymptotic:** The tails extend to $-\\infty$ and $+\\infty$, approaching the x-axis but never physically touching it.
4. **The Empirical Rule (68-95-99.7):**
   - Area between $\\mu - 1\\sigma$ and $\\mu + 1\\sigma$ $= 68.26\\%$ of total area.
   - Area between $\\mu - 2\\sigma$ and $\\mu + 2\\sigma$ $= 95.44\\%$.
   - Area between $\\mu - 3\\sigma$ and $\\mu + 3\\sigma$ $= 99.73\\%$.

### Standard Normal Distribution (Z-Scores)
To calculate probabilities, we standardize any Normal variable $X$ into a Standard Normal variable $Z$:
$$Z = \\frac{X - \\mu}{\\sigma}$$
The $Z$-distribution has a fixed Mean of $0$ and a Variance of $1$. Probabilities are then found using pre-calculated Z-tables.`
    },
    {
      unit: "Unit IV",
      title: "1. Correlation Analysis: Karl Pearson & Spearman's Rank",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Concept of Correlation
While central tendency and dispersion analyze a single variable, Correlation analyzes Bivariate Data (two variables, $X$ and $Y$). It measures the strength and direction of the linear relationship between them (e.g., Hours Studied vs Exam Score).
- **Positive Correlation:** As $X$ increases, $Y$ increases.
- **Negative Correlation:** As $X$ increases, $Y$ decreases.
- **No Correlation:** Changes in $X$ have absolutely no linear bearing on $Y$.

*(Critique: Correlation strictly implies mathematical association, it does NOT imply Causation. Two variables can be highly correlated due to a lurking third variable).*

## 2. Karl Pearson’s Coefficient of Correlation ($r$)
The mathematical gold standard for measuring parametric linear correlation.
- **Formula (Covariance based):** 
  $$r = \\frac{Cov(X, Y)}{\\sigma_x \\sigma_y} = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2} \\sqrt{\\sum (y - \\bar{y})^2}}$$
- **Properties of $r$:**
  1. **Boundaries:** $r$ must mathematically lie between $-1$ and $+1$ inclusive ($-1 \\leq r \\leq 1$).
     - $+1$: Perfect positive linear correlation.
     - $-1$: Perfect negative linear correlation.
     - $0$: Absolute lack of linear correlation.
  2. **Independent of Origin and Scale:** Adding a constant to $X/Y$ or multiplying $X/Y$ by a constant does not change $r$.
  3. **Symmetry:** $r_{xy} = r_{yx}$.

## 3. Spearman’s Rank Correlation Coefficient ($\\rho$)
Developed by Charles Spearman, this is a Non-Parametric measure. It is used when data is qualitative (like beauty, honesty) or when the data contains extreme outliers that would severely distort Karl Pearson's $r$. Instead of raw values, it analyzes the mathematical ranks of the data.

- **Formula (Without tied ranks):**
  $$\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$$
  *(Where $d_i$ is the difference between the ranks of $X$ and $Y$ for the $i^{th}$ item, and $n$ is the number of pairs).*
- **Boundaries:** Like $r$, $\\rho$ lies between $-1$ and $+1$.`
    },
    {
      unit: "Unit IV",
      title: "2. Linear Regression & The Principle of Least Squares",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Concept of Regression Analysis
While Correlation determines *if* a linear relationship exists and how strong it is, **Regression** provides the exact mathematical equation of that line. Regression is used for predictive modeling—predicting the unknown value of a dependent variable ($Y$) based on a known value of an independent variable ($X$).

In any bivariate dataset, there are technically two lines of regression:
1. **Line of $Y$ on $X$:** Used to predict $Y$ when $X$ is known. (Minimizes vertical errors). Equation: $Y = a + bX$.
2. **Line of $X$ on $Y$:** Used to predict $X$ when $Y$ is known. (Minimizes horizontal errors). Equation: $X = c + dY$.

## 2. The Principle of Least Squares
How do we draw the "Line of Best Fit" through a scatter plot of data points? We use the calculus-derived Principle of Least Squares.
- The principle states that the line of best fit is the one that strictly minimizes the sum of the squares of the residual errors (the vertical distances between the actual observed data points and the line).
- Minimize: $\\sum e_i^2 = \\sum (Y_{actual} - Y_{predicted})^2$.

By taking partial derivatives and equating to zero, we obtain two **Normal Equations** for the line $Y = a + bX$:
1. $\\sum Y = na + b\\sum X$
2. $\\sum XY = a\\sum X + b\\sum X^2$
*(Solving these simultaneous equations yields the optimal slope $b$ and intercept $a$).*

## 3. Regression Coefficients ($b_{xy}$ and $b_{yx}$)
Instead of solving normal equations every time, we compute the Regression Coefficients directly from variance and covariance.
- **$b_{yx}$ (Slope of line $Y$ on $X$):** The expected change in $Y$ for a 1-unit change in $X$.
  $$b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{Cov(X,Y)}{Var(X)}$$
- **$b_{xy}$ (Slope of line $X$ on $Y$):** The expected change in $X$ for a 1-unit change in $Y$.
  $$b_{xy} = r \\frac{\\sigma_x}{\\sigma_y} = \\frac{Cov(X,Y)}{Var(Y)}$$

### Critical Mathematical Properties
1. The correlation coefficient $r$ is the geometric mean of the two regression coefficients:
   **$r = \\pm \\sqrt{b_{yx} \\times b_{xy}}$**.
   *(The sign of $r$ is identical to the sign of both regression coefficients. They must all share the same sign).*
2. Both regression coefficients cannot mathematically exceed 1 simultaneously. If one is $>1$, the other MUST be $<1$, because their product $r^2$ must be $\\leq 1$.
3. Independent of Origin, but **NOT** Independent of Scale:
   If $u = \\frac{x-a}{h}$ and $v = \\frac{y-b}{k}$, then $b_{yx} = \\frac{k}{h} \\cdot b_{vu}$.

## 4. Intersection and Angle Between Regression Lines
- **Intersection:** The two regression lines ($Y$ on $X$ and $X$ on $Y$) always intersect exactly at the coordinates of their respective means: $(\\bar{x}, \\bar{y})$.
- **Angle ($\\theta$):** The acute angle between the two lines indicates the strength of correlation.
  $$\\tan \\theta = \\left( \\frac{1 - r^2}{|r|} \\right) \\left( \\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2} \\right)$$
  - If $r = 0$, $\\tan \\theta = \\infty$, meaning $\\theta = 90^\\circ$. The lines are perpendicular (no relationship).
  - If $r = \\pm 1$, $\\tan \\theta = 0$, meaning $\\theta = 0^\\circ$. The lines perfectly coincide (perfect correlation).`
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 2,
      question: "Prove mathematically why the sum of deviations of a set of observations from their Arithmetic Mean is exactly zero.",
      probability: "High Probability",
      examFrequency: "PU 2021, 2023"
    },
    {
      unit: "Unit I",
      marks: 10,
      question: "Explain the necessity of dispersion. Derive the mathematical relationship that adding a constant to every observation in a dataset does not alter the Standard Deviation, but multiplying does.",
      probability: "High Probability",
      examFrequency: "10-Mark PU Question"
    },
    {
      unit: "Unit II",
      marks: 2,
      question: "Define the three Kolmogorov Axioms of Probability.",
      probability: "High Probability",
      examFrequency: "PU 2022, 2024"
    },
    {
      unit: "Unit II",
      marks: 10,
      question: "State and prove Bayes' Theorem. Provide a detailed practical example of its application in calculating posterior probability (Inverse Probability).",
      probability: "Very High Probability",
      examFrequency: "Compulsory 10-Mark Question almost every year"
    },
    {
      unit: "Unit III",
      marks: 2,
      question: "What is the defining relationship between the Mean and Variance in a Poisson distribution vs a Binomial distribution?",
      probability: "High Probability",
      examFrequency: "PU 2021, 2025"
    },
    {
      unit: "Unit III",
      marks: 10,
      question: "Exhaustively detail the properties of the Normal Distribution (Gaussian Curve). Explain the significance of the Standard Normal Variate (Z) and the Empirical Rule (68-95-99.7).",
      probability: "High Probability",
      examFrequency: "10-Mark Theory Question"
    },
    {
      unit: "Unit IV",
      marks: 2,
      question: "State the mathematical relationship between the Correlation Coefficient (r) and the two Regression Coefficients.",
      probability: "High Probability",
      examFrequency: "PU 2023"
    },
    {
      unit: "Unit IV",
      marks: 10,
      question: "Define the Principle of Least Squares. Using this calculus principle, derive the two Normal Equations used to find the line of best fit Y = a + bX.",
      probability: "High Probability",
      examFrequency: "10-Mark Core Derivation"
    }
  ],
  solutions: [
    {
      unit: "Unit I",
      question: "Prove mathematically why the sum of deviations of a set of observations from their Arithmetic Mean is exactly zero.",
      solution: `### Mathematical Proof
Let there be $n$ observations: $x_1, x_2, \\dots, x_n$.
The Arithmetic Mean $\\bar{x}$ is defined as:
$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$
Multiplying both sides by $n$:
$$\\sum_{i=1}^{n} x_i = n\\bar{x}$$

We need to prove that the sum of deviations is zero:
$$\\sum_{i=1}^{n} (x_i - \\bar{x}) = 0$$

Expanding the summation operator across the terms:
$$\\sum_{i=1}^{n} (x_i - \\bar{x}) = \\sum_{i=1}^{n} x_i - \\sum_{i=1}^{n} \\bar{x}$$

Since $\\bar{x}$ is a constant scalar relative to the summation index $i$, summing a constant $n$ times is equal to $n$ multiplied by the constant:
$$\\sum_{i=1}^{n} \\bar{x} = n\\bar{x}$$

Substituting this back into the equation:
$$\\sum_{i=1}^{n} x_i - n\\bar{x}$$

But from our very first definition step, we know that $\\sum_{i=1}^{n} x_i = n\\bar{x}$. Therefore, substituting:
$$n\\bar{x} - n\\bar{x} = 0$$
**Hence Proved.**`
    },
    {
      unit: "Unit II",
      question: "State and prove Bayes' Theorem. Provide a detailed practical example of its application in calculating posterior probability (Inverse Probability).",
      solution: `### Statement of Bayes' Theorem
Let $E_1, E_2, \\dots, E_n$ be a set of mutually exclusive and exhaustive events forming a partition of the Sample Space $S$. Let $A$ be any observable event with $P(A) > 0$ that occurs in conjunction with these events.
Then, the posterior probability of event $E_i$ given that $A$ has occurred is:
$$P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum_{j=1}^{n} P(E_j) P(A | E_j)}$$

### Mathematical Proof
From the fundamental definition of Conditional Probability, we know:
$$P(E_i | A) = \\frac{P(E_i \\cap A)}{P(A)} \\quad \\text{--- (Equation 1)}$$

Using the Multiplication Theorem on the numerator $P(E_i \\cap A)$, we can reverse the condition:
$$P(E_i \\cap A) = P(E_i) \\cdot P(A | E_i) \\quad \\text{--- (Equation 2)}$$

Now, applying the Theorem of Total Probability to the denominator $P(A)$. Since $A$ can occur alongside any of the partitioned events $E_1, E_2...$, the total probability of $A$ is the sum of those intersections:
$$P(A) = P(E_1 \\cap A) + P(E_2 \\cap A) + \\dots + P(E_n \\cap A)$$
$$P(A) = \\sum_{j=1}^{n} P(E_j \\cap A)$$
Substituting Equation 2 into the summation:
$$P(A) = \\sum_{j=1}^{n} P(E_j) P(A | E_j) \\quad \\text{--- (Equation 3)}$$

Finally, substitute Equation 2 (Numerator) and Equation 3 (Denominator) back into Equation 1:
$$P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum_{j=1}^{n} P(E_j) P(A | E_j)}$$
**Hence Proved.**`
    },
    {
      unit: "Unit IV",
      question: "Define the Principle of Least Squares. Using this calculus principle, derive the two Normal Equations used to find the line of best fit Y = a + bX.",
      solution: `### 1. The Principle of Least Squares
The principle dictates that the optimal "Line of Best Fit" through a bivariate scatter plot is the specific line that strictly minimizes the sum of the squares of the vertical residual errors between the observed data points ($y_i$) and the points predicted by the line ($\\hat{y}_i = a + bx_i$).

Let Error $E = \\sum (y_i - \\hat{y}_i)^2 = \\sum (y_i - a - bx_i)^2$.
To find the minimum of this function $E$ with respect to variables $a$ and $b$, we must utilize multivariable calculus. We calculate the partial derivatives of $E$ with respect to $a$ and $b$, and equate them to zero.

### 2. Deriving Normal Equation 1 (Partial w.r.t $a$)
$$\\frac{\\partial E}{\\partial a} = \\sum 2(y_i - a - bx_i)(-1) = 0$$
Dividing by $-2$:
$$\\sum (y_i - a - bx_i) = 0$$
Distributing the summation operator:
$$\\sum y_i - \\sum a - \\sum bx_i = 0$$
Since $a$ is a constant, summing it $n$ times equals $na$:
$$\\sum y_i - na - b\\sum x_i = 0$$
Rearranging gives the **First Normal Equation**:
$$\\sum y_i = na + b\\sum x_i$$

### 3. Deriving Normal Equation 2 (Partial w.r.t $b$)
$$\\frac{\\partial E}{\\partial b} = \\sum 2(y_i - a - bx_i)(-x_i) = 0$$
Dividing by $-2$ and distributing the $x_i$:
$$\\sum (x_i y_i - ax_i - bx_i^2) = 0$$
Distributing the summation operator:
$$\\sum x_i y_i - a\\sum x_i - b\\sum x_i^2 = 0$$
Rearranging gives the **Second Normal Equation**:
$$\\sum x_i y_i = a\\sum x_i + b\\sum x_i^2$$

By solving these two linear simultaneous Normal Equations, we can find the exact values for the intercept $a$ and slope $b$.`
    }
  ]
};
