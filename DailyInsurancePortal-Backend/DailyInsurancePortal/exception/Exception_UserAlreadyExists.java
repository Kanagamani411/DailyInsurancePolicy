package com.kax.DailyInsurancePortal.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class Exception_UserAlreadyExists extends Exception {

	public Exception_UserAlreadyExists(String msg) {
        super(msg);
    }
}
