package org.generation.ecommerce.controller;

import java.util.List;

import javax.validation.Valid;

import org.generation.ecommerce.model.Categoria;
import org.generation.ecommerce.repository.CategoriaRepository;
import org.generation.ecommerce.service.CategoriaService;
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
 * @author Leonardo Rosenbaum
 **/
@RestController
@RequestMapping("/residuo")
@CrossOrigin("*")
public class CategoriaController {

	@Autowired
	private CategoriaService categoriaService;
	@Autowired
	private CategoriaRepository repository;

	@GetMapping("/todos")
	public ResponseEntity<List<Categoria>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/buscar/id")
	public ResponseEntity<?> findById(@Valid @RequestBody Long idCategoria) {
		return ResponseEntity.ok(repository.findById(idCategoria));
	}

	@GetMapping("/buscar/residuo")
	public ResponseEntity<?> findByResiduo(@Valid @RequestBody String residuo) {
		return ResponseEntity.ok(repository.findByResiduoContainingIgnoreCase(residuo));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<?> cadastroResiduo(@Valid @RequestBody Categoria residuo) {
		return ResponseEntity.ok(categoriaService.cadastrar(residuo));
	}

	@PutMapping("/atualizar/id/")
	public ResponseEntity<?> atualizar(@Valid @PathVariable Long idCategoria, @RequestBody Categoria residuo) {
		return ResponseEntity.ok(categoriaService.att(idCategoria, residuo));
	}

	@DeleteMapping("/deletar/id")
	public void delete(@Valid @RequestBody Long idCategoria) {
		repository.deleteById(idCategoria);
	}
}
