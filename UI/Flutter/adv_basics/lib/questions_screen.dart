import 'package:adv_basics/answers.dart';
import 'package:flutter/material.dart';
import 'package:adv_basics/data/questions.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestionsScreen extends StatefulWidget {
  
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {

  int currentQuestionIndex = 0;

  void answerQuestion() {
    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(context) {
    var currentQuestion = questions[currentQuestionIndex];
    return SizedBox(
      width: double.infinity,
      child: Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
              Text(currentQuestion.question, 
              style: GoogleFonts.lato(color: Colors.white, fontSize: 24),
              textAlign: TextAlign.center,
              ),
              SizedBox(height: 30,),
              ...currentQuestion.getShuffledAnswers().map((answer) => 
              Answers(answerText: answer, onTap: answerQuestion,))
            ]),
      ),
    );
  }
}