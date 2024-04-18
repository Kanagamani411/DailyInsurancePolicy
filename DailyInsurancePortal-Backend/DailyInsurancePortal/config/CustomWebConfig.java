/*package com.kax.DailyInsurancePortal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SuppressWarnings("deprecation")
@Configuration
public class CustomWebConfig extends WebMvcConfigurerAdapter {

	

	    @Autowired
	    private JwtInterceptors jwtInterceptors;

	 
	    @Override
	    public void addInterceptors(InterceptorRegistry registry) {
	        registry.addInterceptor(jwtInterceptors);
	    }

	    @Bean
	    @RequestScope
	    public RequestMeta getRequestMeta(){
	        return new RequestMeta();
	    }

	    @Bean
	    public JwtInterceptors jwtInterceptors(){
	        return new JwtInterceptors(getRequestMeta());
	    }
	
}
*/
