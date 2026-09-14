import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
          color: const Color.fromARGB(255, 197, 175, 234),

          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Woman Place',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 45.0,
                  fontFamily: 'Slowing',
                ),
              ),

              SizedBox(height: 40),

              TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'E-mail',
                ),
              ),

              SizedBox(height: 20),

              TextField(
                obscureText: true,
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Senha',
                ),
              ),

              SizedBox(height: 20),

              ElevatedButton(onPressed: () {}, child: Text('Login')),

              SizedBox(height: 10),

              ElevatedButton(onPressed: () {}, child: Text('Cadastrar-se')),
            ],
          ),
        ),
      ),
    ),
  );
}
