// init clean :D R2 to 0.
// R2 will be the sum.
@R2
M=0

// loop will run R1 times.
// 'i' will be R1..
@R1
D=M     // D = R1
@i
M=D     // i = R1

(LOOP)
  //  If i == 0 we then
  @i
  D=M
  @END
  D;JEQ // If i == 0, jump to END.

  // Add the result
  @R0
  D=M     // D = R0
  @R2
  M=D+M

  // i--...
  @i
  M=M-1   

  @LOOP
  0;JMP

(END)
  @END
  0;JMP