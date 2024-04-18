package com.kax.DailyInsurancePortal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Collections;

import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;

import springfox.documentation.builders.RequestHandlerSelectors;

import springfox.documentation.service.ApiInfo;

import springfox.documentation.service.Contact;

import springfox.documentation.spi.DocumentationType;

import springfox.documentation.spring.web.plugins.Docket;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class DailyInsurancePortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DailyInsurancePortalApplication.class, args);
	}

	@Bean

	public Docket configureSwagger() {

		return new Docket(DocumentationType.SWAGGER_2).select()

				.paths(PathSelectors.ant("/user/**"))

				.apis(RequestHandlerSelectors.basePackage("com.kax.DailyInsurancePortal.controller")).build()

				.apiInfo(apiInfo());

	}

	private ApiInfo apiInfo() {

		return new ApiInfo("Daily Insurance Api", "Sample API for Daily Insurance", "1.0", "path/to/terms",

				new Contact("Daily Insurance Portal", "http://www.google.com", "dip@gmail.com"), "API License",

				"http://www.google.com", Collections.emptyList());

	}
}
