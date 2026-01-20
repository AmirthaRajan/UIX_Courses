import 'package:flutter/material.dart';
import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/questions_summary.dart';

class ResultsScreen extends StatefulWidget {

  const ResultsScreen({super.key, required this.choosenAnswers, required this.onRestartQuiz});

  final List<String> choosenAnswers;

  final void Function() onRestartQuiz;

  @override
  State<ResultsScreen> createState() {
    return _ResultsScreenState();
  }
}

class _ResultsScreenState extends State<ResultsScreen> {

    void restartQuiz() {
      widget.onRestartQuiz();
    }

    List<Map<String, Object>> getResultSummary() {
    final List<Map<String, Object>> summary = [];

    for(var i=0;i < widget.choosenAnswers.length; i++) {
      summary.add({
        'question_index': i,
        'question': questions[i].question,
        'correct_answer': questions[i].answers[0],
        'user_answer': widget.choosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(context) {
    final summary = getResultSummary();
    final totalNumberOfQuestions = questions.length;
    final numberOfCorectAnswers = summary.where((data) {
      return data['user_answer'] == data['correct_answer'];
    }).length;
    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("You answered $numberOfCorectAnswers out of $totalNumberOfQuestions questions correctly!", 
              style: TextStyle(color: Colors.white, fontSize:24, fontWeight: FontWeight.bold),
              textAlign: TextAlign.center),
            SizedBox(height: 30,),
            QuestionsSummary(summary),
            SizedBox(height: 30,),
            TextButton.icon(
              style: TextButton.styleFrom(foregroundColor: Colors.white),
              icon: Icon(Icons.refresh) , 
              onPressed: restartQuiz, 
              label : Text("Restart Quiz?", style: TextStyle(color: Colors.white),))
          ]
        )
      ),
    );
  }
}
