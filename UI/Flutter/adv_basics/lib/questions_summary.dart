import "package:flutter/material.dart";

class QuestionsSummary extends StatelessWidget {

  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

@override
Widget build(BuildContext context) {
  return SizedBox(
    width: double.infinity,
    height: 400,
    child: SingleChildScrollView(
      child: Column(
        children: summaryData.map((data) {
          final userAnswer = data['user_answer'];
          final correctAnswer = data['correct_answer'];
          final badgeColor = userAnswer == correctAnswer ? Colors.green : Colors.red;
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
          Container(
            width: 28, height: 28, alignment: Alignment.center,
            decoration: BoxDecoration(shape: BoxShape.circle, color: badgeColor,),
            child: Text(
              ((data['question_index'] as int) + 1).toString(),
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  data['question'] as String,
                  textAlign: TextAlign.left,
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16),
                ),
                SizedBox(height: 5,),
                Text(
                  data['user_answer'] as String,
                  textAlign: TextAlign.left,
                  style: TextStyle(color: Colors.purpleAccent),
                ),
                SizedBox(height: 5),
                Text(
                  data['correct_answer'] as String,
                  textAlign: TextAlign.left,
                  style: TextStyle(color: Colors.lightBlueAccent),
                ),
              ],
            ),
          )
        ],);
      }).toList(),
      ),
    ),
  );
}
}