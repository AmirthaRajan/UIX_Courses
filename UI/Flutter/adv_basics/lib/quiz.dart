import 'package:adv_basics/home_screen.dart';
import 'package:adv_basics/questions_screen.dart';
import 'package:flutter/material.dart';

class Quiz extends StatefulWidget {

  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {

  final List<String> selectedAnswers = [];
  Widget? activeScreen;

  @override
  initState() {
    activeScreen = HomeScreen(switchScreen);
    super.initState();  
  }

  void selectedAnswer(String answer) {
    selectedAnswers.add(answer);
  }


  void switchScreen() {
    setState((){
        activeScreen = QuestionsScreen(onSelectAnswer: selectedAnswer);
    });
  }

  @override
  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.deepPurple, Colors.purple],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child : activeScreen,
        )
        )
      );
  }
}