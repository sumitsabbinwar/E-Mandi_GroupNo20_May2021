package com.bezkoder.springjwt.controllers;

import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.FarmerPost;
import com.bezkoder.springjwt.repository.FarmerPostRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/test")
public class FarmerPostController {

	private FarmerPostRepository FarmerPostRepository;
	
	public FarmerPostController() {}
	
	@Autowired
	public FarmerPostController(FarmerPostRepository FarmerPostRepository) {
		super();
		this.FarmerPostRepository =FarmerPostRepository;
	}
	
	
	@GetMapping("/FarmerPost")
	public List<FarmerPost> getAllPost(){
		return FarmerPostRepository.findAll();
	}
	
//	@GetMapping("/FarmerPost/count")
//	public int getCount() {
//		return FarmerPostRepository.getFarmerPostCount();
//	}
	
	@GetMapping("/FarmerPost/{diteId}")
	public FarmerPost getFarmerPost(@PathVariable long diteId) {
		FarmerPost theFarmerPost = FarmerPostRepository.findById(diteId).get();
		if( theFarmerPost == null) {
			throw new RuntimeException("ID not found "+diteId);
		}
		return theFarmerPost;
	}
	
	@PostMapping("/FarmerPost")
	public FarmerPost addFarmerPost(@RequestBody FarmerPost theFarmerPost) {
		theFarmerPost.setId(0);
		FarmerPostRepository.save(theFarmerPost);
		return theFarmerPost;
		
		
	}	
	
    @PutMapping("/FarmerPost")
	public FarmerPost updateFarmerPost(@RequestBody FarmerPost theFarmerPost) {
    	FarmerPostRepository.save(theFarmerPost);
	return theFarmerPost;
	}	
	
    @DeleteMapping("/FarmerPost/{id}")
    public String deleteFarmerPost(@PathVariable long id) {
    	FarmerPostRepository.deleteById(id);
    	return null;
    }	
	
	
	
	
	
	
	
}
