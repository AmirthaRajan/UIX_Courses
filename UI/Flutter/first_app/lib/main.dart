import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: GradientContainer()
      ),
    ),
  );
}

class GradientContainer extends StatelessWidget {

  const GradientContainer({super.key});

  @override
  Widget build(context) {
    return Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.blue, Colors.green],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: const Center(
            child: Text(
              'Hello World',
              style: TextStyle(color: Colors.limeAccent, fontSize: 24),
            ),
          ),
        );
  }
}