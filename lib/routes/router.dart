
import 'package:flutter/material.dart';
import 'package:mynest/screens/login_screen.dart';

class AppRoutes {
  static const String home = '/home';
  static const String login = '/login';


  static final Map<String, WidgetBuilder> routes= {
    login: (context) => const LoginScreen(),
  };
}