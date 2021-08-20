package org.generation.ecommerce.seguranca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@Configuration
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder autenticacao) throws Exception {
		autenticacao.inMemoryAuthentication().withUser("boaz").password(senhaCodificada().encode("boaz")).authorities("ROLE_ADMIN");
		autenticacao.userDetailsService(userDetailsService);
	}

	@Bean
	public PasswordEncoder senhaCodificada() {
		return new BCryptPasswordEncoder();

	}
	
	@Override
	protected void configure (HttpSecurity http) throws Exception{
		http.authorizeRequests()
		.antMatchers(HttpMethod.POST,"/usuario/cadastrar").permitAll()
		.antMatchers(HttpMethod.POST,"/usuario/logar").permitAll()
		.antMatchers(HttpMethod.GET,"/produto/**").permitAll()
		.antMatchers(HttpMethod.POST,"/produto/**").permitAll()
		.antMatchers(HttpMethod.PUT,"/produto/**").permitAll()
		.antMatchers(HttpMethod.DELETE,"/produto/**").permitAll()
		.antMatchers(HttpMethod.GET,"/residuo/**").permitAll()
		.antMatchers(HttpMethod.POST,"/residuo/**").permitAll()
		.antMatchers(HttpMethod.PUT,"/residuo/**").permitAll()
		.antMatchers(HttpMethod.DELETE,"/residuo/**").permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
	}
}
