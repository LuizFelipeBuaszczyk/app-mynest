import 'package:flutter/material.dart';
import 'package:mynest/providers/auth_provider.dart';
import 'package:mynest/routes/router.dart';
import 'package:provider/provider.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => AuthProvider(), 
        ),
      ],
      child: MaterialApp(
        title: 'MyNest',
        theme: ThemeData.light(),
        initialRoute: AppRoutes.login,
        routes: AppRoutes.routes,
      ),
    );
  }
}