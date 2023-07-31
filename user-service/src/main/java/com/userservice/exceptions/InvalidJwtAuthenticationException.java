package com.userservice.exceptions;

public class InvalidJwtAuthenticationException extends Throwable {
    public InvalidJwtAuthenticationException(String expiredOrInvalidJwtToken, RuntimeException ex) {
    }
}
