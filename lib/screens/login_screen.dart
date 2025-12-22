import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  final String title = "Ralize o Login";


  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                title,
                textDirection: TextDirection.ltr,
                style: TextStyle(color: Colors.blueAccent, fontSize: 50.0),
              ),
              SizedBox(height: 30),
              TextField(
                onChanged: (text) {
                  
                },
                decoration: InputDecoration(
                  labelText: 'Usuário',
                  border: OutlineInputBorder()
                ),
              ),
              SizedBox(height: 10),
              TextField(
                onChanged: (text) {
        
                },
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Senha',
                  border: OutlineInputBorder()
                ),
              ),
              SizedBox(height: 10),
              ElevatedButton(
                onPressed: () {
                  
                }, 
                child: Text('Entrar')
              )
            ],
          ) 
        ),
      ),
    );
  }
}