package org.generation.ecommerce.model.dto;

<<<<<<< HEAD
=======
import javax.validation.constraints.Email;
>>>>>>> abf6b54ed8846d65726278daafaf9778b35348be
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UserLoginDto {

	private String nome;
<<<<<<< HEAD

	private String sobrenome;

	@NotBlank(message = "Campo não pode ser vazio")
	private String usuario;

	private String email;

=======
	private String sobrenome;
	@NotBlank(message = "Campo não pode ser vazio")
	private String usuario;
	@Email
	@NotBlank(message = "Campo não pode ser vazio")
	private String email;
>>>>>>> abf6b54ed8846d65726278daafaf9778b35348be
	@NotNull(message = "Campo não pode ser nulo")
	private String senha;

	private String token;
<<<<<<< HEAD

=======
	
>>>>>>> abf6b54ed8846d65726278daafaf9778b35348be
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
