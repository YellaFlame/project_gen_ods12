package org.generation.ecommerce.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_Produto;
	
	@NotNull
	private String status;
		
	@NotNull
	private String endereco;
		
	@NotNull
	private String data_retirada;
	
	private String descricao;

	@NotNull
	private Long quantidade;
	
	@ManyToOne
	@JsonIgnoreProperties("produto")
	@JoinColumn(name = "fk_categoria")
	private Categoria categoria;
	
	@ManyToOne
	@JsonIgnoreProperties("usuario")
	@JoinColumn(name = "fk_usuario")
	private Usuario usuario;
	
	
	//fk_categoria
	//fk_usuario
	//@ManyToOne
	//@JsonIgnoreProperties({""})
	//private CategoriaModel categoria;

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public void setId_Produto(long id_Produto) {
		this.id_Produto = id_Produto;
	}

	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}

	public long getId_Produto() {
		return id_Produto;
	}

	public void setId_Produto(Long id_Produto) {
		this.id_Produto = id_Produto;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getData_retirada() {
		return data_retirada;
	}

	public void setData_retirada(String data_retirada) {
		this.data_retirada = data_retirada;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(long quantidade) {
		this.quantidade = quantidade;
	}


	
	
}