package org.generation.ecommerce.controller;

import java.util.List;
<<<<<<< HEAD

=======
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
import java.util.Optional;

import javax.validation.Valid;

import org.generation.ecommerce.model.Usuario;
import org.generation.ecommerce.model.dto.UsuarioDTO;
import org.generation.ecommerce.repository.UsuarioRepository;
import org.generation.ecommerce.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author hanely menezes
 *
 */
@RestController
<<<<<<< HEAD
@RequestMapping("api/v1/usuario")
=======
@RequestMapping("/usuario")
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
@CrossOrigin("*")
public class UsusarioController {
	// @Autowired private UsuarioRepository repositoryU;
	@Autowired
	private UsuarioService serviceU;
	@Autowired
	private UsuarioRepository repositoryU;

<<<<<<< HEAD
	@PostMapping("/cadastrar")
=======
	@PostMapping
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
	public ResponseEntity<Object> cadastrarUsuario(@Valid @RequestBody Usuario usuario) {
		return serviceU.cadastrarUsuario(usuario);
	}

<<<<<<< HEAD
	@GetMapping("/todos")
=======
	@GetMapping
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
	public ResponseEntity<List<Usuario>> listarTodos() {
		return ResponseEntity.ok(repositoryU.findAll());
	}

	@GetMapping("/buscar/id/{id_usuario}")
	public ResponseEntity<Usuario> listarId(@Valid @PathVariable(value = "id_usuario") Long id_usuario) {
		return serviceU.listarPorId(id_usuario);
	}

	@GetMapping("/buscar/nome/{nome}")
	public ResponseEntity<List<Usuario>> listarNome(@Valid @PathVariable(value = "nome") String nome) {
		return serviceU.listarPorNome(nome);
	}

<<<<<<< HEAD
	@PutMapping("/alteração/{id_usuario}")
=======
	@PutMapping("/{id_usuario}")
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
	public Optional<Usuario> alterarSenha(@Valid @PathVariable Long id_usuario,
			@RequestBody UsuarioDTO senhaParaAtualizar) {
		return serviceU.alterarSenha(id_usuario, senhaParaAtualizar);
	}

	@DeleteMapping("/deletar/{id_usuario}")
	public ResponseEntity<String> deletarUsuario(@Valid @PathVariable Long id_usuario) {
		return serviceU.deletarUsuario(id_usuario);
	}
}
