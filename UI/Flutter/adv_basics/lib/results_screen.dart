import 'package:flutter/material.dart';
import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/questions_summary.dart';

class ResultsScreen extends StatelessWidget {

  const ResultsScreen({super.key, required this.choosenAnswers});

  final List<String> choosenAnswers;

  List<Map<String, Object>> getResultSummary() {
    final List<Map<String, Object>> summary = [];

    for(var i=0;i < choosenAnswers.length; i++) {
      summary.add({
        'question_index': i,
        'question': questions[i].question,
        'correct_answer': questions[i].answers[0],
        'user_answer': choosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("You answered X out of Y questyions correctly!", style: TextStyle(color: Colors.white, fontSize:20)),
            SizedBox(height: 30,),
            const Text("List of question and answers..."),
            QuestionsSummary(getResultSummary()),
            SizedBox(height: 30,),
            TextButton(onPressed: () {}, child: Text("Restart Quiz?", style: TextStyle(color: Colors.white),))
          ]
        )
      ),
    );
  }

}