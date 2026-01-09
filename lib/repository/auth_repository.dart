import 'package:mynest/utils/send_api_request.dart';

class AuthRepository {

  RequestDIO request = RequestDIO();

  Future<void> login(String username, String password) async {
    request.requestData = {
      'username': username,
      'password': password,
    };

    await request.fetch('/login', Methods.post);

    switch(request.statusCode){
      case 200:
        return;
      default:
        throw Exception('Login failed');
    }

  }
}