import 'package:flutter/material.dart';
import 'package:mynest/app.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

void main() {
  dotenv.load(fileName: ".env");
  runApp(const App());
}