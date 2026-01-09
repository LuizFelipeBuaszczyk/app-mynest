import 'package:flutter/material.dart';
import 'package:mynest/repository/auth_repository.dart';

class AuthProvider extends ChangeNotifier {
  final AuthRepository _authRepository;

  AuthProvider(this._authRepository);

  bool _isLoading = false;
  bool _isAuthenticated = false;
  bool _hasError = false;

  bool get isAuthenticated => _isAuthenticated;
  bool get hasError => _hasError;
  bool get isLoading => _isLoading;

  Future<void> login(String username, String password) async {
    _isLoading = true;
    _hasError = false;
    notifyListeners();

    try {
      await _authRepository.login(username, password);
    } catch (e){
      _hasError = true;
      _isAuthenticated = false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

}