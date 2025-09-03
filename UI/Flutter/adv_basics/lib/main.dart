import 'package:flutter/material.dart'; 

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [Colors.deepPurple, Colors.purple],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight
            )
        ) ,
        child: Center(
          child: Column(
            children: [
              Image.asset('assets/images/quiz-logo.png', ),
              Text("Learn Flutter the fun way!",
                style: TextStyle(fontSize: 28)),
              TextButton(onPressed: () {}, 
                child: Text('Start Quiz', 
                style:TextStyle(fontSize: 12)))
            ],
            
          ),)
      ))
  )
  );
}