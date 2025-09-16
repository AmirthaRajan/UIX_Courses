import 'package:flutter/material.dart';

class Answers extends StatelessWidget {

  const Answers({super.key , required this.answerText, required this.onTap});

  final String answerText;
  final void Function() onTap;

  @override
  build(context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color.fromARGB(255, 73, 0, 95),
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(40)),
        padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 10)
      ),
      onPressed: onTap, 
      child: Text(answerText, textAlign: TextAlign.center,)
      );
  }
}