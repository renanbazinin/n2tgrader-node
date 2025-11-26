
(MAIN_LOOP)
  // 
  //  keyboarde is at memory address 24576
  @KBD
  D=M     // KBD address.

  
  // If D is 0 color to white.
  @SET_WHITE
  D;JEQ

  // a key is pressed to black.
  @color
  M=-1    
  @DRAW
  0;JMP   

(SET_WHITE)
  // white.
  @color
  M=0     

(DRAW)
  // Fill scree
  // Init a pointer start of screen .
  @SCREEN
  D=A     // 16384  address of the screen
  @ptr
  M=D     

(DRAW_LOOP)
  // Is we done ful
  @ptr
  D=M
  @KBD
  D=D-A
  @MAIN_LOOP
  D;JEQ  

	//// We fill here the screen ..
  @color
  D=M     
  @ptr
  A=M     
  M=D     

  
  @ptr
  M=M+1
  @DRAW_LOOP
  0;JMP   