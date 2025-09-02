import 'package:flutter/material.dart';
import 'gradient_container.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: GradientContainer(colors : [
          const Color.fromARGB(255, 100, 181, 246), 
          const Color.fromARGB(255, 129, 199, 132)
          ])
      ),
    ),
  );
}
