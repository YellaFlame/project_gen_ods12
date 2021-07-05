package org.generation.ecommerce.model;

<<<<<<< HEAD
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;

=======
import javax.persistence.Entity;
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.OneToMany;
=======
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

<<<<<<< HEAD
import org.generation.ecommerce.model.util.TipoUsuario;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

=======
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
/**
 * 
 * @author hanely menezes
 *
 */
@Entity
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_usuario;

	@NotBlank(message = "Nome não deve ser nulo ou vazio")
	@Size(max = 40)
	private String nome;

	@NotBlank(message = "Sobrenome não deve ser nulo ou vazio")
	@Size(max = 40)
	private String sobrenome;

	@Email
	private String email;

<<<<<<< HEAD
	@NotNull(message = "Senha não deve ser nulo ou vazio")
	@Size(min = 8, max = 8)
	private String senha;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private TipoUsuario tipoUsuario;
	
	
	public List<Produto> getListaProduto() {
		return listaProduto;
	}

	public void setListaProduto(List<Produto> listaProduto) {
		this.listaProduto = listaProduto;
	}

	@OneToMany
	@JsonIgnoreProperties("usuario")
	private List<Produto> listaProduto = new ArrayList<>();	
=======
	@NotNull
	@Size(min = 8, max = 8)
	private String senha;

	@Enumerated(EnumType.STRING)
	private String tipoUsuario;
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c

	// Special Methods
	public long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}

<<<<<<< HEAD
	public TipoUsuario getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(TipoUsuario tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

=======
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

}
