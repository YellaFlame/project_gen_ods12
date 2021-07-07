package org.generation.ecommerce.service;

import org.generation.ecommerce.model.Produto;
import org.generation.ecommerce.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ProdutoService {

	@Autowired 
	private ProdutoRepository produto;
	
	public ResponseEntity<Produto> buscarPorId(Long id_produto) {
		return produto.findById(id_produto).map(res -> ResponseEntity.ok(res))
				.orElse(ResponseEntity.notFound().build());
	
	}
}
