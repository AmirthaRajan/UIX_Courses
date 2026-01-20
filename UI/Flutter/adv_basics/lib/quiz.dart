import 'package:adv_basics/home_screen.dart';
import 'package:adv_basics/questions_screen.dart';
import 'package:flutter/material.dart';
import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/results_screen.dart';

class Quiz extends StatefulWidget {

  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {

  List<String> selectedAnswers = [];
  Widget? activeScreen;

  @override
  void initState() {
    super.initState();
    activeScreen = HomeScreen(switchScreen);
  }

  void onRestartQuiz() {
    setState(() {
      selectedAnswers = [];
      activeScreen = HomeScreen(switchScreen);
    });
  }

  void selectedAnswer(String answer) {
    selectedAnswers.add(answer);

    if(questions.length == selectedAnswers.length) {
      setState((){
        activeScreen = ResultsScreen(choosenAnswers: selectedAnswers, onRestartQuiz: onRestartQuiz);
      });
   }
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