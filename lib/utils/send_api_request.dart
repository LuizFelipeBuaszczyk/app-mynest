import 'package:dio/dio.dart';
import 'package:mynest/utils/env_config.dart';

enum Methods { get, post, put, patch, delete }

class RequestDIO{
  final dio = Dio(
    BaseOptions(
      baseUrl: EnvConfig.apiMyNestBaseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    )
  );
  late final Object requestData;

  late int? statusCode;
  late List<dynamic> responseData;

  Future<void> fetch(String endpoint, Methods method) async {
    Response<dynamic> response;

    switch (method){
      case Methods.get:
        response = await dio.get(endpoint);
        break;
      case Methods.post:
        response = await dio.post(endpoint, data: requestData);
        break;
      default:
        throw Exception('Methot type not supported');
    }
        
    statusCode = response.statusCode;
    responseData = response.data;
  }
}

