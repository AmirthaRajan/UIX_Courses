import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeScreen extends StatelessWidget {

  const HomeScreen(this.startQuiz, {super.key});

  final void Function() startQuiz;

  @override
  Widget build(context) {
    return Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Image.asset(
                  'assets/images/quiz-logo.png',
                  width: 300,
                  color: const Color.fromARGB(126, 255, 255, 255),
                ),
                SizedBox(height: 80),
                Text(
                  "Learn Flutter the fun way!",
                  style: GoogleFonts.lato(fontSize: 24, color: Colors.white),
                ),
                const SizedBox(height:30),
                OutlinedButton.icon(
                  onPressed: startQuiz,
                  style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
                  icon: Icon(Icons.arrow_right_alt_rounded),
                  label: Text(
                    'Start Quiz',                    
                    style: TextStyle(fontSize: 12),

                  ),
                ),
              ],
            );
  }
}