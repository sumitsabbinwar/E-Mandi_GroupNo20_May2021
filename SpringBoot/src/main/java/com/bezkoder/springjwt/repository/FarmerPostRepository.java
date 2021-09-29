package com.bezkoder.springjwt.repository;

import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.FarmerPost;

@Repository
public interface FarmerPostRepository extends JpaRepository<FarmerPost, Long> {

//	@Query(value= "select count(id) from FarmerPost" )
//	public int getFarmerPostCount();
//	
//	Optional<FarmerPost> findByName(String status);
}
